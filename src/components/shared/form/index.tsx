import InputField from '../input-field';
import SelectField from '../select-field';
import Button from '../button';

import { FormProps } from './index.props';

const Form = ({
    title,
    inputFieldConfig,
    submitText,
    ...props
}: FormProps) => {
    return (
        <div className="form">
            <h1 className="form__title">{title}</h1>
            <form {...props}>
                {inputFieldConfig.map((it) => {
                    const isSelectFieldConfig = it.type === 'select' && 'options' in it;
                    if (isSelectFieldConfig) {
                        return (
                            <SelectField
                                className="form__input"
                                {...it}
                            />
                        );
                    }

                    return (
                        <InputField
                            className="form__input"
                            {...it}
                        />
                    );
                })}
                <Button className="form__submit" type="submit">
                    {submitText}
                </Button>
            </form>
        </div>
    );
};

export default Form;
