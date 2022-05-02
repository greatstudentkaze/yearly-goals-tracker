import { SubmitHandler, FieldValues } from 'react-hook-form';

import Form from '../shared/form';

import { fieldsConfig } from './fields.config';

// TODO: add textArea!
const FeedbackForm = () => {
    const handleSubmit: SubmitHandler<FieldValues> = (data, evt) => {
        console.log(data, evt);
    };

    return (
        <Form
            title="Give feedback / Ask a question"
            inputFieldConfig={fieldsConfig}
            submitText="Send"
            action="https://echo.htmlacademy.ru"
            method="post"
            onSubmit={handleSubmit}
        />
    );
};

export default FeedbackForm;