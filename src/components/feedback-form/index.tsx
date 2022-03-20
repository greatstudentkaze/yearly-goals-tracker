import Form from '../shared/form';

import { fieldsConfig } from './fields.config';

// TODO: add textArea!
const FeedbackForm = () => {
    return (
        <Form
            title="Give feedback / Ask a question"
            inputFieldConfig={fieldsConfig}
            submitText="Send"
            action="https://echo.htmlacademy.ru"
            method="post"
        />
    );
};

export default FeedbackForm;