import InputField from '../input-field';
import Button from '../button';

const LoginForm = () => {
    return (
        <div className="form">
            <h1 className="form__title">Login</h1>
            <form action="https://echo.htmlacademy.ru" method="post">
                <InputField
                    className="form__input"
                    type="email"
                    labelText="Email"
                    id="email"
                    placeholder="hi@nefagin.ru"
                />
                <InputField
                    className="form__input"
                    type="password"
                    labelText="Password"
                    id="password"
                    placeholder="*************"
                />
                <Button className="form__submit" type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
};

export default LoginForm;
