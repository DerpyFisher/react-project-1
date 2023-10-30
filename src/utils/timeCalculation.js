/**
 * This function format a number of seconds into string time format.
 * @example
 * formatTime(3600); // Return "1:00:00"
 * @param {number} seconds number - the number of seconds to format.
 * @author Fernzoe (Derpy Fisher)
 * @returns a String represent the time formatted from the `seconds` parameter in hh:mm:ss format.
 * @version 1.0.0.0
 */
export function formatTime(seconds) {
    const hours = parseInt(Math.floor(seconds/3600))
    const minutes = parseInt(Math.floor((seconds - hours*3600)/60))
    const remainingSeconds =  parseInt(Math.floor((seconds - hours*3600 - minutes*60)))
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}