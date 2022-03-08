import cn from 'classnames';

import { SelectFieldProps } from './index.props';
import DropdownIconSrc from '../../images/svg/dropdown.svg';

// TODO: think about combining with InputFiekd
const SelectField = ({
    labelText,
    id,
    options,
    className,
    ...props
}: SelectFieldProps) => {

    return (
        <div className={cn('input-field', className)}>
            <label className="input-field__label" htmlFor={id}>
                {labelText}
            </label>
            <select
                className="input-field__input input-field__input--select"
                id={id}
                style={{ backgroundImage: `url("${DropdownIconSrc}")` }}
                {...props}
            >
                {options.map(({ value, label }) => (
                    <option value={value}>{label}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;
