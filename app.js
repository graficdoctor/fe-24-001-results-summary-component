const buttonElement = document.querySelector('.btn');
const summaryItemsList = document.querySelector('ul');

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
		});
	});

function animateNumber() {
	const resultNumberDisplay = document.querySelector('.result-circle h2');
	const targetNumber = 76;
	let currentNumber = 0;

	const intervalId = setInterval(() => {
		resultNumberDisplay.textContent = currentNumber;
		if (currentNumber === targetNumber) {
			clearInterval(intervalId);
		}
		currentNumber++;
	}, 100);
}
