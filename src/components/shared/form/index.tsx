import { FormProvider, useForm } from 'react-hook-form';

import InputField from '../input-field';
import SelectField from '../select-field';
import Button from '../button';

import { FormProps, IInputFieldConfig } from './index.props';
import { getHTMLValidationAttribute } from './index.helpers';

const Form = ({
    title,
    inputFieldConfig,
    submitText,
    onSubmit,
    ...props
}: FormProps) => {
    const methods = useForm({
        mode: 'onTouched',
    });
    const { handleSubmit, register, formState: { errors } } = methods;

    return (
        <FormProvider {...methods}>
            <div className="form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="form__title">{title}</h1>

                <form {...props}>
                    {inputFieldConfig.map((it) => {
                        const isSelectFieldConfig = it.type === 'select' && 'options' in it;
                        if (isSelectFieldConfig) {
                            const { name, required, ...restProps } = it;

                            return (
                                <SelectField
                                    key={name}
                                    className="form__input"
                                    required={getHTMLValidationAttribute(required)}
                                    {...restProps}
                                    error={errors[name]}
                                    {...register(name, {
                                        required,
                                    })}
                                />
                            );
                        }

                        const inputConfig = it as IInputFieldConfig;
                        const { name, required, maxLength, minLength, validate, ...restProps } = inputConfig;

                        return (
                            <InputField
                                key={name}
                                className="form__input"
                                required={getHTMLValidationAttribute(required)}
                                maxLength={getHTMLValidationAttribute(maxLength)}
                                minLength={getHTMLValidationAttribute(minLength)}
                                {...restProps}
                                error={errors[name]}
                                {...register(name, {
                                    required,
                                    maxLength,
                                    minLength,
                                    validate,
                                })}
                            />
                        );
                    })}

                    <Button className="form__submit" type="submit">
                        {submitText}
                    </Button>
                </form>
            </div>
        </FormProvider>
    );
};

export default Form;
