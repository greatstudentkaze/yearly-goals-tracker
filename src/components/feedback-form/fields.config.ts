import { GENERIC_REQUIRED_VALIDATION_RULE } from '../shared/form/index.constants';

export const fieldsConfig = [
    {
        name: 'name',
        id: 'name',
        labelText: 'Name',
        placeholder: 'Vanya',
        required: GENERIC_REQUIRED_VALIDATION_RULE,
    },
    {
        name: 'email',
        id: 'email',
        labelText: 'Email',
        placeholder: 'hi@nefagin.ru',
        required: GENERIC_REQUIRED_VALIDATION_RULE,
        type: 'email',
    },
    {
        name: 'message',
        id: 'message',
        labelText: 'Message',
        required: GENERIC_REQUIRED_VALIDATION_RULE,
        minLength: {
            value: 30,
            message: 'Message should be at least 30 characters',
        },
    },
];
