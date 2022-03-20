import Form from '../shared/form';

import { fieldsConfig } from './fields.config';

// TODO: add textArea
const CreateGoalForm = () => {
    return (
        <Form
            title="Create goal"
            inputFieldConfig={fieldsConfig}
            submitText="Create"
            action="https://echo.htmlacademy.ru"
            method="post"
        />
    );
};

export default CreateGoalForm;
