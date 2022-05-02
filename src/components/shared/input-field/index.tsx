import { forwardRef, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import cn from 'classnames';

import { InputFieldProps } from './index.props';

import './styles/input-field.css';

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({
    labelText,
    id,
    type = 'text',
    className,
    error,
    unregisterOnUnmount,
    ...props
}, ref) => {
    const isTextArea = type === 'textarea';
    const methods = useFormContext();
    const unregister = methods?.unregister;

    useEffect(() => {
        return () => {
            if (unregister && unregisterOnUnmount) {
                unregister(props.name);
            }
        };
    }, [unregister, unregisterOnUnmount, props.name]);

    return (
        <div className={cn('input-field', className, {
            'input-field--error': error,
        })}>
            <label className="input-field__label" htmlFor={id}>{labelText}</label>
            <input className="input-field__input" type={type} id={id} {...props} ref={ref} />
            {error?.message && (
                <p className="input-field__error-message">{error.message}</p>
            )}
        </div>
    );
});

export default InputField;
