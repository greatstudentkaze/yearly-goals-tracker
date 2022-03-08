import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

export interface InputFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    labelText: string;
    id: string;
}