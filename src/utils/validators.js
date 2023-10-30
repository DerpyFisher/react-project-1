/**
 * A function that check for valid email address.
 * @description
 * A valid email usually ends with "@gmail.com" but some bussiness also have
 * their own email address with custom ends. But since we only concern with FPT,
 * we need to check for their email address only.
 * @example
 * emailValidator("myEmailAddress@gmail.com"); // return trues
 * @param {String} email String - The input email string.
 * @returns true if the email is valid, else false.
 * @author Fernzoe (Derpy Fisher)
 * @version 1.0.0.0
 */
export function emailValidator(email) {
    return/^.+@(gmail.com|fpt.edu.vn)$/.test(email);
}