const URL = "http://jsonplaceholder.typicode.com/photos";

export function apiRequest () {
    // bring the data from server side using browser 'fetch' method api
    return fetch(URL).then( response => response.json())

}
