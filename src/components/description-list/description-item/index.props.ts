import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface DescriptionItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    dt: ReactNode,
    dd: ReactNode,
}
