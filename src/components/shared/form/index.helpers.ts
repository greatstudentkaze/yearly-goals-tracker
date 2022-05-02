import { Validate, ValidationRule } from 'react-hook-form';

import { GENERIC_REQUIRED_VALIDATION_RULE } from './index.constants';

type ValidationRuleType = boolean | number | string;

type GetHTMLValidationAttributeFromConfig = <T extends ValidationRuleType>(required: T | ValidationRule<T> | undefined) => T | undefined;

export const getHTMLValidationAttribute: GetHTMLValidationAttributeFromConfig =
    (validationRule)  => {
        if (!validationRule) {
            return undefined;
        }

        return typeof validationRule === 'object'
            ? validationRule.value
            : validationRule;
    };

export const validateStringWithWhitespaces: Validate<string> = (value) => !!value.trim() || GENERIC_REQUIRED_VALIDATION_RULE.message
