import cn from 'classnames';

import { DescriptionListProps } from './index.props';

const DescriptionList = ({ className, children }: DescriptionListProps) => {
    return (
        <dl className={cn('description-list', className)}>
            {children}
        </dl>
    );
};

export default DescriptionList;