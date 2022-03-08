import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

export interface SelectFieldProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    labelText: string;
    id: string;
    options: {
        value: string;
        label: string;
    }[];
}