import { GENERIC_REQUIRED_VALIDATION_RULE } from '../shared/form/index.constants';

export const fieldsConfig = [
    {
        name: 'email',
        id: 'email',
        type: 'email',
        labelText: 'Email',
        placeholder: 'hi@nefagin.ru',
        autoComplete: 'username',
        required: GENERIC_REQUIRED_VALIDATION_RULE,
    },
    {
        name: 'password',
        id: 'password',
        type: 'password',
        labelText: 'Password',
        placeholder: '*************',
        autoComplete: 'current-password',
        required: GENERIC_REQUIRED_VALIDATION_RULE,
    },
];
