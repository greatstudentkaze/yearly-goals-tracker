import { ValidationRule } from 'react-hook-form';

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
