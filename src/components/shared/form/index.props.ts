import { DetailedHTMLProps, FormHTMLAttributes } from 'react';

interface IInputFieldConfig {
    name: string;
    id: string;
    type?: string;
    labelText: string;
    placeholder?: string;
    autoComplete?: string;
}

type SelectFieldOptionType = {
    value: string;
    label: string;
}

interface ISelectFieldConfig {
    type: 'select';
    name: string;
    id: string;
    labelText: string;
    options: SelectFieldOptionType[];
    defaultValue?: string;
}

export interface FormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    title: string;
    inputFieldConfig: Array<IInputFieldConfig | ISelectFieldConfig>;
    submitText: string;
}
