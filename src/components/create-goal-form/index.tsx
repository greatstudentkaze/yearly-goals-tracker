import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import Api from '../../api';
import { useAppSelector } from '../../store/hooks';
import { selectUser } from '../../store/features/user/slice';

import Form from '../shared/form';

import { fieldsConfig } from './fields.config';

interface FormValues {
    title: string;
    type: string;
    amountTarget?: string;
    description: string;
}

// TODO: add textArea
const CreateGoalForm = () => {
    const user = useAppSelector(selectUser)!;

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit: SubmitHandler<FormValues> = (data, evt) => {
        Api.createGoal({ ...data, userId: user.id })
            .then(() => setIsSubmitted(true))
            .catch((err) => {
                if (err instanceof Error) {
                    setError(err.message);
                }
            });
    };

    return (
        <Form
            title="Create goal"
            inputFieldConfig={fieldsConfig}
            submitText="Create"
            action="https://echo.htmlacademy.ru"
            method="post"
            onSubmit={handleSubmit}
            error={error}
        />
    );
};

export default CreateGoalForm;
