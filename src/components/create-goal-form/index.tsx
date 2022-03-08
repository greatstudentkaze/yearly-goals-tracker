import InputField from '../input-field';
import Button from '../button';
import SelectField from '../select-field';

const goalTypeOptions = [
    {
        value: 'boolean',
        label: 'Completed / Not completed',
    },
    {
        value: 'amount',
        label: 'Amount',
    },
];

// TODO: add textArea
const CreateGoalForm = () => {
    return (
        <div className="form">
            <h1 className="form__title">Give feedback / Ask a question</h1>
            <form action="https://echo.htmlacademy.ru" method="post">
                <InputField
                    className="form__input" 
                    labelText="Title"
                    id="title"
                />
                <SelectField
                    className="form__input"
                    labelText="What type of goal do you want to select?"
                    name="type"
                    id="type"
                    options={goalTypeOptions}
                    defaultValue="boolean"
                />
                <InputField
                    className="form__input"
                    type="text"
                    labelText="Description"
                    id="description"
                />
                <Button className="form__submit" type="submit">
                    Create
                </Button>
            </form>
        </div>
    );
};

export default CreateGoalForm;
