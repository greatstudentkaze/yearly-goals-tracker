import { Validate, ValidationRule } from 'react-hook-form';

import { GENERIC_REQUIRED_VALIDATION_RULE } from './index.constants';
import { FormProps } from './index.props';

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

export const getWatchFieldNames = (inputFieldConfig: FormProps['inputFieldConfig']): string[] => {
    const deps = inputFieldConfig.reduce<string[]>((acc, it) => {
        if (!it.dependencies) {
            return acc;
        }

        return [...acc, ...it.dependencies];
    }, []);

    return Array.from(new Set(deps));
};

export const validateStringWithWhitespaces: Validate<string> = (value) => !!value.trim() || GENERIC_REQUIRED_VALIDATION_RULE.message

export const validateNumber: Validate<number> = (value) => (!isNaN(value) && isFinite(value)) || 'Value must be a number';
