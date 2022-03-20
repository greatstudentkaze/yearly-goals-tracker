import cn from 'classnames';

import { ButtonProps } from './index.props';

const Button = ({
    type = 'button',
    children,
    className,
    ...props
}: ButtonProps) => {
    return (
        <button className={cn('button', className)} type={type} {...props}>
            {children}
        </button>
    );
};

export default Button;