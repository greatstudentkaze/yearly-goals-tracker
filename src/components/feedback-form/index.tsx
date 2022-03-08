import InputField from '../input-field';
import Button from '../button';

// TODO: add textArea!
const FeedbackForm = () => {
    return (
        <div className="form">
            <h1 className="form__title">Give feedback / Ask a question</h1>
            <form action="https://echo.htmlacademy.ru" method="post">
                <InputField
                    className="form__input" 
                    labelText="Name"
                    id="name"
                    placeholder="Vanya"
                />
                <InputField
                    className="form__input"
                    type="email"
                    labelText="Email"
                    id="email"
                    placeholder="hi@nefagin.ru"
                />
                <InputField
                    className="form__input"
                    type="text"
                    labelText="Message"
                    id="message"
                />
                <Button className="form__submit" type="submit">
                    Send
                </Button>
            </form>
        </div>
    );
};

export default FeedbackForm;