let count = 0;
const countElement = document.getElementById('count');

function updateCount() {
	countElement.textContent = count;
}

function increment() {
	count++;
	updateCount();
}

function decrement() {
	count--;
	updateCount();
}
