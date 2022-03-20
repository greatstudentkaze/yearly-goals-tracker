import { NavLink } from 'react-router-dom';
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
            <nav className="main-nav">
                <ul className="main-nav__list">
                    {navigationItems.map(({ label, route }, i) => (
                        <li key={i} className="main-nav__item">
                            <NavLink
                                className={({ isActive }) => isActive ? 'main-nav__link--current' : undefined}
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

export default Header;