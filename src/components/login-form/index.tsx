import { FormEvent, useContext } from 'react';

import { AppContext } from '../../app.context';

import InputField from '../input-field';
import Button from '../button';

const LoginForm = () => {
    const { setIsAuthorized } = useContext(AppContext);

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setIsAuthorized(true);
    };

    return (
        <div className="form">
            <h1 className="form__title">Login</h1>
            <form action="https://echo.htmlacademy.ru" method="post" onSubmit={handleSubmit}>
                <InputField
                    className="form__input"
                    type="email"
                    labelText="Email"
                    id="email"
                    placeholder="hi@nefagin.ru"
                    autoComplete="username"
                />
                <InputField
                    className="form__input"
                    type="password"
                    labelText="Password"
                    id="password"
                    placeholder="*************"
                    autoComplete="current-password"
                />
                <Button className="form__submit" type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
};

export default LoginForm;
