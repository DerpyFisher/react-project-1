/**
 * This function is used to turn a json object that resemble a list of json object into a list of json object. 
 * @description
 * You should call this right after retrieving the exam information.
 * @example
 * RetrieveQuestionList(FetchAPI('https://Domain/Path/...')); // => Return [{Object}, {Object}, {Object}]
 * @author Fernzoe (Derpy Fisher)
 * @param {Object} jsonObject - The exam JSON retrieved from the server. 
 * @returns A list of questions (and answer choices) information.
 * @version 1.0.0.0
 */
export function RetrieveQuestionList(examJSON) {
    if (examJSON == null) {
        return null;
    } 
    // If the exam information can be fetched, we do as follow
    let listOfKeys = Object.keys(examJSON.lsQuizz);
    let quizzList = [];
    for (let i = 0; i < listOfKeys.length; i++) {
        quizzList.push(examJSON.lsQuizz[listOfKeys[i]]);
    }
    return quizzList;
}