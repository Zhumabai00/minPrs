const mix = [5, "3", 55];

// mix[1] = 1555;

const arr = [['lesson', 85,], ['world', 'hello', 'hi',], ['I am', 'thank you!'], ['you are', 'welcom']];

// arr[2][1] = 'you are welcom!!!!!!!!'

// console.log(arr[2])

// if (arr[2][1] == 'you are welcom!!!!!!!!') {
// 	console.log('thank you!')
// } else {
// 	console.log('i did to hear you!');
// }


// for (var i = 0; i < arr.length; i++) {
// 	// arr[i] *= 2;
// 	console.log('Элемент ' + (i + 1) + ':' + arr[i])
// }

// for (let i = 0; i < arr[1].length; i++) {
// 	console.log('Элемент' + (i + 1) + ':' + arr[i][1]);

// };
let btns = document.querySelector('#button')
// document.getElementsById("button").addEventListener(
// 	'click', () => alert("Hello World")
// );
btns.addEventListener(("click", () => {
	alert("Hello")
}))
