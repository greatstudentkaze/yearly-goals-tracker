import { forwardRef } from 'react';
import cn from 'classnames';

import { SelectFieldProps } from './index.props';

import DropdownIconSrc from '../../../images/svg/dropdown.svg';
import '../input-field/styles/input-field.css';

// TODO: think about combining with InputField
const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(({
    labelText,
    id,
    options,
    className,
    ...props
}, ref) => {

    return (
        <div className={cn('input-field', className)}>
            <label className="input-field__label" htmlFor={id}>
                {labelText}
            </label>
            <select
                className="input-field__input input-field__input--select"
                id={id}
                style={{ backgroundImage: `url("${DropdownIconSrc}")` }}
                ref={ref}
                {...props}
            >
                {options.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        </div>
    );
});

export default SelectField;
