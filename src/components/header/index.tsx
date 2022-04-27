import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { SyntheticEvent } from 'react';

import { AppRoute } from '../../contants';

const navigationItems = [
    {
        label: 'Goal list for the year',
        route: AppRoute.ROOT,
    },
    {
        label: 'Create goal',
        route: AppRoute.CREATE_GOAL,
    },
    {
        label: 'Feedback',
        route: AppRoute.FEEDBACK,
    },
];

const Header = () => {
    return (
        <header className="header container">
            <SkipLink />
            <nav className="main-nav">
                <ul className="main-nav__list">
                    {navigationItems.map(({ label, route }, i) => (
                        <li key={i} className="main-nav__item">
                            <NavLink
                                className={({ isActive }) => cn({
                                    'main-nav__link--current': isActive
                                })}
                                to={route}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

const SkipLink = () => {
    const handleSkipLinkClick = (evt: SyntheticEvent) => {
        const target = evt.target as HTMLAnchorElement;
        evt.preventDefault();

        const [, toElementId] = target.href.split('#');
        const toElement = document.getElementById(toElementId) as HTMLElement;
        if (!toElement) {
            return;
        }

        toElement.setAttribute('tabindex', '-1');
        toElement.focus();

        toElement.addEventListener('blur', () => {
            toElement.removeAttribute('tabindex');
        }, { once: true });
    }

    return (
        <a href="#main-content" className="skip-link" onClick={handleSkipLinkClick}>
            Перейти к основному контенту
        </a>
    );
};

export default Header;
