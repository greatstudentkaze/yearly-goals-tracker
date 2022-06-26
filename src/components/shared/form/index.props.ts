import { DetailedHTMLProps, FormHTMLAttributes, SyntheticEvent } from 'react';
import {
    FieldValues,
    SubmitHandler,
    Validate,
    ValidationRule,
    UseFormGetValues,
    UseFormSetValue,
    DefaultValues,
} from 'react-hook-form';

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
    dependencies?: string[];
    displayCondition?: (getValues: UseFormGetValues<FieldValues>) => boolean;
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
    dependencies?: string[];
    displayCondition?: (getValues: UseFormGetValues<FieldValues>) => boolean;
}

export interface FormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    title: string;
    inputFieldConfig: Array<IInputFieldConfig | ISelectFieldConfig>;
    submitText: string;
    // todo: how to use with FieldValues instead of any?
    // how to implement generic interface if we want to specify field interfaces within forms (e.g. feedback-form.tsx)
    onSubmit: SubmitHandler<any>;
    defaultValues?: DefaultValues<FieldValues>;
    error?: string;
}
