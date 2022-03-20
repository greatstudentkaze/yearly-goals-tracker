import cn from 'classnames';

import { InputFieldProps } from './index.props';

const InputField = ({
    labelText,
    id,
    type = 'text',
    className,
    ...props
}: InputFieldProps) => {
    const isTextArea = type === 'textarea';

    return (
        <div className={cn('input-field', className)}>
            <label className="input-field__label" htmlFor={id}>{labelText}</label>
            <input className="input-field__input" type={type} id={id} {...props} />
        </div>
    );
};

export default InputField;
