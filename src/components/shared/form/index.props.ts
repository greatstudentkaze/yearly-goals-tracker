import { DetailedHTMLProps, FormHTMLAttributes } from 'react';
import { FieldValues, SubmitHandler, Validate, ValidationRule } from 'react-hook-form';

export interface IInputFieldConfig {
    name: string;
    id: string;
    type?: string;
    labelText: string;
    placeholder?: string;
    autoComplete?: string;
    required?: boolean | ValidationRule<boolean>;
    maxLength?: number | ValidationRule<number>;
    minLength?: number | ValidationRule<number>;
    // todo: think about generic
    validate?: Validate<number> | Validate<string>;
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
    required?: boolean | ValidationRule<boolean>;
}

export interface FormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    title: string;
    inputFieldConfig: Array<IInputFieldConfig | ISelectFieldConfig>;
    submitText: string;
    onSubmit: SubmitHandler<FieldValues>;
}
