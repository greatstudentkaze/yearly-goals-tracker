import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { ChangeHandler, FieldError } from 'react-hook-form';

export interface InputFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    labelText: string;
    id: string;
    error?: FieldError;
    onChange?: ChangeHandler;
    onBlur?: ChangeHandler;
    unregisterOnUnmount?: boolean;
}
