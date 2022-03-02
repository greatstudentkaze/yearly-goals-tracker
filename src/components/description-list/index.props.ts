import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';

import { DescriptionItemProps } from './description-item/index.props';

export interface DescriptionListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDListElement>, HTMLDListElement> {
    children: ReactElement<DescriptionItemProps> | ReactElement<DescriptionItemProps>[];
}