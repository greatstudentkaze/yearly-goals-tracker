import { SubmitHandler, FieldValues } from 'react-hook-form';

import Form from '../shared/form';

import { fieldsConfig } from './fields.config';

// TODO: add textArea
const CreateGoalForm = () => {
    const handleSubmit: SubmitHandler<FieldValues> = (data, evt) => {
        console.log(data, evt);
    };

    return (
        <Form
            title="Create goal"
            inputFieldConfig={fieldsConfig}
            submitText="Create"
            action="https://echo.htmlacademy.ru"
            method="post"
            onSubmit={handleSubmit}
        />
    );
};

export default CreateGoalForm;
