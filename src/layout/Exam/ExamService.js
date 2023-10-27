/**
 * This function is used to call the API.
 * @description
 *  You can use this function to call for the api to return a Promise (with a JSON body) and then
 * use it to do other thing.
 * @author Collin
 * @example
 * ExamService().then((response) => {/* Do your process here... /})
 * @returns a Promise
 * @version 1.0.0.0
 */
async function CallAPI(apiUrl) {
  return fetch(apiUrl).then((res) => {return res.json();})
}

export default CallAPI;