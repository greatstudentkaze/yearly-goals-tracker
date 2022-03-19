import Header from '../header';

import { LayoutProps } from './index.props';

const Layout = ({
    withoutHeader = false,
    children,
}: LayoutProps) => {
    return (
        <>
            {!withoutHeader && <Header/>}
            <main className="page__main container">
                {children}
            </main>
        </>
    );
};

export default Layout;
