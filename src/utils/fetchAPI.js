/**
 * The function is primarily used for calling APIs in other components.
 * @description
 * Basically a normal `fetch()` call but we do this for fun...
 * @param {String} url String - The API endpoint or the request URL.
 * @param {String} method String - The method should be POST or GET only
 * @param {JSON} body String - The JSON body that should be stringified
 * @example
 * FetchAPI('http:/localhost:1880/user/1') // return a JSON Object represent a user.
 * 
 * @returns null if invalid method detected or a promise (not validated) if can reach the `url` and the method is valid.
 * @author Fernzoe (Derpy Fisher)
 * @version 1.0.0.0
 */
export function FetchAPI(url, method='GET', body=null) {
    if (["GET", "POST"].includes(method)) {
        return fetch(url, {method:method, body:body});
    }
    else {
        return null;
    }
}