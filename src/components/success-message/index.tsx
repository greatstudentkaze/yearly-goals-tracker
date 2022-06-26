import { Link } from 'react-router-dom';

import { AppRoute } from '../../contants';

import successEmojiSrc from '../../images/success-emojis.png';
import successEmojiRetinaSrc from '../../images/success-emojis@2x.png';

const SuccessMessage = () => {
    return (
        <div className="success-message">
            <h1 className="success-message__title">Successfully sent!</h1>
            <p className="success-message__text">Thank you for your feedback. We will look into this and get back to you soon.</p>
            <img className="success-message__decoration" src={successEmojiSrc} srcSet={`${successEmojiRetinaSrc} 2x`} width="130" height="60" alt="Party Popper and Partying Face Emojis" />
            {/*todo: add Link support for the Button component*/}
            <Link className="success-message__link button" to={AppRoute.ROOT}>
                Go to homepage
            </Link>
        </div>
    );
};

export default SuccessMessage;
