const username = 'ehlzi';
const repo = 'Live_Portfolio_Website';
const commitsContainer = document.getElementById('commits-container');

fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
    .then(response => response.json())
    .then(data => {
        const commitsList = data.slice(0, 5).map(commit => {
            const date = new Date(commit.commit.author.date).toLocaleDateString();
            return `<li>
                <strong>${commit.commit.message}</strong>
                <br>by ${commit.commit.author.name} on ${date}
            </li>`;
        }).join('');

        commitsContainer.innerHTML = `<ul>${commitsList}</ul>`;
    })
    .catch(error => {
        commitsContainer.innerHTML = `<p>Error fetching commits: ${error.message}</p>`;
    });