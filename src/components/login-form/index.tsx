import { FormEvent, useContext } from 'react';

import { AppContext } from '../../app.context';

import Form from '../shared/form';

import { fieldsConfig } from './fields.config';

const LoginForm = () => {
    const { setIsAuthorized } = useContext(AppContext);

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setIsAuthorized(true);
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
