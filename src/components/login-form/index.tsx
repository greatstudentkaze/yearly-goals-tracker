import { useContext } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';

import { AppContext } from '../../app.context';

import Form from '../shared/form';

import { fieldsConfig } from './fields.config';

const LoginForm = () => {
    const { setIsAuthorized } = useContext(AppContext);

    const handleSubmit: SubmitHandler<FieldValues> = (data, evt) => {
        setIsAuthorized(true);
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
