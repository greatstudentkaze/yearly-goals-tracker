import cn from 'classnames';

import { ButtonProps } from './index.props';

const Button = ({
    type = 'button',
    children,
    className,
}: ButtonProps) => {
    return (
        <button className={cn('button', className)} type={type}>
            {children}
        </button>
    );
};

export default Button;