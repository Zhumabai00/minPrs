const requestURL = 'https://jsonplaceholder.typicode.com/users';
const xhttp = new XMLHttpRequest();


// function sendRequest(method, url, body = null) {
// 	return fetch(url).then(response => response.json()).then(data => {
// 		data.map((item) => {
// 			root.innerHTML += `<h1 class="for">${data.id}</h1>`
// 			root.innerHTML += `<h1 class="email">${item.email}</h1>`
// 			root.innerHTML += `<h1>${item.address.city}</h1>`
// 		})
// 	})
// }
// sendRequest('GET', requestURL)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))
// const body = {
// 	name: 'ZHumabai',
// 	age: 17
// }
// sendRequest('POST', requestURL, body)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))


const mainFunc = async () => {
	fetch(requestURL)
		.then(response => response.json())
		.then(data => {
			data.map((item) => {
				root.innerHTML += `<h1 class="for">${item.id}</h1>`
				root.innerHTML += `<h1 class="email">${item.email}</h1>`
				root.innerHTML += `<h1>${item.address.city}</h1>`
			})
		})
}
// mainFunc()
