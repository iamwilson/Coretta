
/**
 * check for null input
 * @param value value to be validated
 */
export const IsInputNotNull = (value: any) => {
    return (value.length > 3);
};

/**
 * check that the value is numeric
 * @param value value to be validated
 */
export const IsInputNumeric = (value: any) => {
    return (value.match(/^[0-9]*$/gm));
};

/**
 * check that the email is valid
 * @param value value to be validated
 */
export const IsEmailValid = (value: any) => {
    return (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
};
