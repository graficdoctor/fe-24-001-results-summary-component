const buttonElement = document.querySelector('.btn');
const summaryItemsList = document.querySelector('ul');
let targetNumber;
let count = 0

buttonElement.addEventListener('click', (e) => e.preventDefault());
document.addEventListener('DOMContentLoaded', () => animateNumber());

fetch('data.json')
	.then((response) => response.json())
	.then((data) => {
		data.forEach((item) => {
			const summaryItem = document.createElement('li');
			summaryItem.classList.add('summary-item');
			summaryItem.innerHTML = `
				<img src="${item.icon}" alt="" />
        <span class="text">${item.category}</span>
        <span class="score">${item.score} <span class="opacity-low">/ 100</span></span>
      `;
			summaryItemsList.appendChild(summaryItem);
			count += item.score;
		});
		targetNumber = Math.round(count / data.length);
	});

function animateNumber() {
	const resultNumberDisplay = document.getElementById('result');
	let currentNumber = 0;

	const intervalId = setInterval(() => {
		resultNumberDisplay.textContent = currentNumber;
		if (currentNumber === targetNumber) {
			clearInterval(intervalId);
		}
		currentNumber++;
	}, 100);
}