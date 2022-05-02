import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import { ChangeHandler, FieldError } from 'react-hook-form';

export interface SelectFieldProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    labelText: string;
    id: string;
    options: {
        value: string;
        label: string;
    }[];
    error?: FieldError;
    onChange?: ChangeHandler;
    onBlur?: ChangeHandler;
}