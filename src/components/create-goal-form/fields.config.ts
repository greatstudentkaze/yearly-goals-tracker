import { FieldValues, UseFormGetValues } from 'react-hook-form';

import { GENERIC_REQUIRED_VALIDATION_RULE } from '../shared/form/index.constants';
import { validateNumber } from '../shared/form/index.helpers';

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
        type: 'number',
        name: 'amountTarget',
        id: 'amount-target',
        labelText: 'Target',
        required: GENERIC_REQUIRED_VALIDATION_RULE,
        placeholder: '1 000 000',
        validate: validateNumber,
        dependencies: ['type'],
        displayCondition: (getValues: UseFormGetValues<FieldValues>) => {
            const type = getValues('type');
            return type === 'amount';
        },
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
