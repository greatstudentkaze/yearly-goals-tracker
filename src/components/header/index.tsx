import cn from 'classnames';

const navigationItems = [
    {
        label: 'Goal list for the year',
        route: '/',
    },
    {
        label: 'Create goal',
        route: '/',
    },
    {
        label: 'Feedback',
        route: '/',
    },
];

const Header = () => {
    return (
        <header className="header container">
            <nav className="main-nav">
                <ul className="main-nav__list">
                    {navigationItems.map(({ label, route }, i) => (
                        <li key={i} className={cn('main-nav__item', { 'main-nav__item--current': i === 0 })}>
                            <a href={route}>{label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;