import { SubmitHandler } from 'react-hook-form';

import { useAppDispatch } from '../../store/hooks';
import { login } from '../../store/features/user/slice';

import Form from '../shared/form';

import { fieldsConfig } from './fields.config';

interface FormValues {
    email: string;
    password: string;
}

const LoginForm = () => {
    const dispatch = useAppDispatch();

    const handleSubmit: SubmitHandler<FormValues> = (data, evt) => {
        dispatch(login(data));
        console.log(data, evt);
    };

    return (
        <Form
            title="Login"
            inputFieldConfig={fieldsConfig}
            submitText="Login"
            onSubmit={handleSubmit}
            action="https://echo.htmlacademy.ru"
            method="post"
        />
    );
};

export default LoginForm;
