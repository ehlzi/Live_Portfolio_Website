# BEM Class Changes for All Files

## Header Section (All Files)

Current | Proposed Change
--------|----------------
`header` | `site-header`
`nav-bar` | `site-header__nav`
`nav-image` | `site-header__logo`
`banner-img` | `site-header__logo-image`
`nav-button` | `site-header__nav-item`
`splash` | `hero`
`styling` | `hero__content`
`logo-img` | `hero__logo`
`btn-main` | `hero__cta-button`

## Rewards Section (index.html)

Current | Proposed Change
--------|----------------
`rewards-container` | `rewards`
`rewards-bar` | `rewards__list`
`rewards-image` | `rewards__item`
`banner-img` (in rewards) | `rewards__image`

## Learn More Section (index.html)

Current | Proposed Change
--------|----------------
`learn-more` | `learn-more`
`menu__section-title` (in learn-more) | `learn-more__section-title`
`learn-more-container` | `learn-more__container`
`learn-more-image` | `learn-more__image-wrapper`
`banner-img` (in learn-more) | `learn-more__image`
`learn-more-text-container` | `learn-more__content`
`title` (in learn-more) | `learn-more__title`
`description` (in learn-more) | `learn-more__description`

## Menu Section (index.html, menu.html)

Current | Proposed Change
--------|----------------
`menu` | `menu`
`section-title` (in menu) | `menu__header`
`title` (in menu) | `menu__title`
`description` (in menu) | `menu__description`
`btn-main` (in menu) | `menu__cta-button`
`our-menu` | `menu__items`
`menu-item-container` | `menu__item`
`menu-item-img-container` | `menu__item-image-wrapper`
`menu-item-img` | `menu__item-image`
`menu-item-text-container` | `menu__item-content`
`title` (in menu item) | `menu__item-title`
`description` (in menu item) | `menu__item-description`

## Order Section (order.html)

Current | Proposed Change
--------|----------------
`order-container` | `order`
`form` | `order__form`
`contact-information` | `order__contact-information`
`legend-title` | `order__legend-title`
`form-labels` | `order__form-labels`
`menu-item-img-container` | `order__menu-item-img-container`
`menu-item-img` | `order__menu-item-img`
`menu-item-text-container` | `order__menu-item-text-container`
`title` (in order) | `order__title`
`description` (in order) | `order__description`

## Contact Section (contact.html)

Current | Proposed Change
--------|----------------
`contact-us-body` | `contact`
`contact-us-main` | `contact__main`
`contact-us` | `contact__section`
`form-title` | `contact__form-title`
`contact-us-logo` | `contact__logo`
`logo-img` (in contact) | `contact__logo-image`
`form-description` | `contact__form-description`
`form-group` | `contact__form-group`
`contact-us-button` | `contact__button`

## About Section (about.html)

Current | Proposed Change
--------|----------------
`about-splash` | `about__splash`
`about-styling` | `about__styling`
`about-logo-img` | `about__logo`
`bio` | `about__bio`
`about-description` | `about__description`
`meet-team` | `about__meet-team`
`meet-team-container` | `about__meet-team-container`
`meet-team-image` | `about__meet-team-image`
`meet-team-text-container` | `about__meet-team-text-container`
`title` (in about) | `about__title`
`description` (in about) | `about__description`
`about-map` | `about__map`

## Footer Section (All Files)

Current | Proposed Change
--------|----------------
`footer-bar` | `site-footer__nav`
`nav-image` (in footer) | `site-footer__logo`
`banner-img` (in footer) | `site-footer__logo-image`
`nav-button` (in footer) | `site-footer__nav-item`
`description` (in footer) | `site-footer__copyright`

## General Notes

1. Remove redundant classes like `banner-img` that are used in multiple unrelated sections. Instead, create specific classes for each usage context.
2. Standardize naming conventions. For example, use `__nav-item` consistently for navigation items in both header and footer.
3. Avoid using classes from one section in another (e.g., `title` in the menu section). Create section-specific classes instead.
4. Consider adding modifiers where appropriate, such as `menu__item--featured` or `site-header__nav-item--active`.
5. Ensure that block names are unique and descriptive of their function or content.

Remember to update your CSS selectors to match these new class names after making these changes.
