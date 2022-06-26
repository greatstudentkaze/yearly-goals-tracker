import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import Api from '../../api';
import { useAppSelector } from '../../store/hooks';
import { selectUser } from '../../store/features/user/slice';

import Form from '../shared/form';
import SuccessMessage from '../success-message';

import { fieldsConfig } from './fields.config';

interface FormValues {
    email: string;
    message: string;
    name: string;
}

// TODO: add textArea!
const FeedbackForm = () => {
    const user = useAppSelector(selectUser)!;

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit: SubmitHandler<FormValues> = (data) => {
        Api.sendFeedback({ ...data, userId: user.id })
            .then(() => setIsSubmitted(true))
            .catch((err) => {
                if (err instanceof Error) {
                    setError(err.message);
                }
            });
    };

    if (isSubmitted) {
        return (
            <SuccessMessage/>
        );
    }

    return (
        <Form
            title="Give feedback / Ask a question"
            inputFieldConfig={fieldsConfig}
            submitText="Send"
            onSubmit={handleSubmit}
            defaultValues={{
                name: user.name,
                email: user.email,
            }}
            error={error}
        />
    );
};

export default FeedbackForm;