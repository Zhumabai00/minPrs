const requestURL = 'https://jsonplaceholder.typicode.com/users';
const xhttp = new XMLHttpRequest();


function sendRequest(method, url, body = null) {
	return new Promise((resolve, reject) => {
		xhttp.open(method, url)
		xhttp.responseType = 'json'
		xhttp.setRequestHeader('Content-Type', 'application/json')

		xhttp.onload = () => {
			if (xhttp.status >= 400) {
				reject(xhttp.response);
			} else {
				resolve(xhttp.response);
			}
		}
		xhttp.onerror = () => {
			reject(xhttp.response)
		}

		xhttp.send(JSON.stringify(body))

	});
}
const body = {
	name: 'ZHumabai',
	age: 17
}
sendRequest('POST', requestURL, body)
	.then(data => console.log(data))
	.catch(err => console.log(err))
// sendRequest('GET', requestURL)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))
