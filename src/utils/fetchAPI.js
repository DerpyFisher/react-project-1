/**
 * The function is primarily used for calling APIs in other components.
 * @description
 * Basically a normal `fetch()` call but we do this for fun...
 * @param {String} url String - The API endpoint or the request URL.
 * @param {String} method String - The method should be POST or GET only
 * @param {JSON} body String - The JSON body that should be stringified
 * @example
 * FetchAPI('http:/localhost:1880/user/1') // return a JSON Object represent a user.
 * @returns null if invalid method detected or a promise (not validated) if can reach the `url` and the method is valid.
 * @author Fernzoe (Derpy Fisher)
 * @version 1.0.0.0
 * @deprecated since version 1.0.0.0
 */
export function FetchAPI(url, method='GET', body=null) {
  if (["GET", "POST"].includes(method)) {
      return fetch(url, {method:method, body:body});
  }
  else {
      return null;
  }
}

/**
 * The function is primarily used for getting exam information
 * @description
 * Basically a normal `fetch()` call with GET method but we do this for fun...
 * - Derived from the now decapriated function FetchAPI()
 * @param {String} url String - The API endpoint or the request URL.
 * @example
 * FetchAPI(`http:/localhost:1880/exam/${ExamCode}`) // return a JSON Object represent an exam information.
 * @returns a promise (not validated) if can reach the `url` and the method is valid.
 * @throws Error on failure.
 * @author Fernzoe (Derpy Fisher)
 * @version 1.0.0.0
 */
export async function getExam(url) {
  console.log(url);
    return fetch(url).then((response) => 
      {
        if (response.ok) {
          return response.json();
        }
        else {
          throw Error(`Fetch failed. Status:${response.status}. Message:${response.statusText}`);
        }})
}

/**
 * The function is used to get user score after they did the test.
 * @description
 * Basically a normal `fetch()` call with POST method and a body but we do this for fun...
 * @param {String} url String - The API endpoint or the request URL.
 * @param {String} answer String - The JSON body that has been stringified
 * @example
 * getPoint(`http:/localhost:1880/answer/${ExamCode}`, JSON.stringify(userAnswer)) // return a number.
 * @returns The number of question our user managed to do (correctly).
 * @author Fernzoe (Derpy Fisher)
 * @version 1.0.0.0
 */
export async function getPoint(url, answer) {
  return await fetch(url, {method:'POST', headers:{'Accept': 'application/json','Content-Type': 'application/json'}, body:answer})
  .then((response) => 
  {
    if (response.ok) {
      return response.json();
    }
    else {
      throw Error(`Fetch failed. Status:${response.status}. Message:${response.statusText}`);
    }
  })
}
