const root = document.getElementById('root')

// fetch('https://jsonplaceholder.typicode.com/users/1').catch(err => console.log(err))
// 	.then(response => response.json())
// 	.then(data => {
// 		// data.map((item) => {
// 		root.innerHTML += `<h1>${data.phone}</h1>`
// 		// root.innerHTML += `<img src="${item.src}" />`
// 		// })
// 	})
const func1 = async () => {
	await fetch('https://jsonplaceholder.typicode.com/users/1').catch(err => console.log(err))
		.then(response => response.json())
		.then(data => {
			root.innerHTML += `<h1>${data.id}</h1>`
		})
}

const mainFunc = async () => {
	await func1()
	await fetch('https://jsonplaceholder.typicode.com/users/2').catch(err => console.log(err))
		.then(response => response.json())
		.then(data => {
			root.innerHTML += `<h1>${data.id}</h1>`
		})
	await fetch('https://jsonplaceholder.typicode.com/users/3').catch(err => console.log(err))
		.then(response => response.json())
		.then(data => {
			root.innerHTML += `<h1>${data.id}</h1>`
		})
}

mainFunc()
