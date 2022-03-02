import cn from 'classnames';
import { DescriptionItemProps } from './index.props';

const DescriptionItem = ({
    dt,
    dd,
    className,
}: DescriptionItemProps) => {
    return (
        <div className={cn('description-list__wrap', className)}>
            <dt>
                {dt}
            </dt>
            <dd className="description-list__dd">
                {dd}
            </dd>
        </div>
    );
};

export default DescriptionItem;
