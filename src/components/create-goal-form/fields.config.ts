import { GENERIC_REQUIRED_VALIDATION_RULE } from '../shared/form/index.constants';

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

export const fieldsConfig = [
    {
        name: 'title',
        id: 'title',
        labelText: 'Title',
        required: GENERIC_REQUIRED_VALIDATION_RULE,
    },
    {
        type: 'select',
        name: 'type',
        id: 'type',
        labelText: 'What type of goal do you want to select?',
        options: goalTypeOptions,
        defaultValue: 'boolean',
    },
    {
        name: 'description',
        id: 'description',
        labelText: 'Description',
        maxLength: {
            value: 60,
            message: 'Description should be no more than 60 characters',
        },
    },
];
