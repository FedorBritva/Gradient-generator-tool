changeGradient();


for (let i = 0; i < 8; i++) {
	let gradientWindow = document.getElementsByClassName('gradient_window')[i];
	gradientWindow.addEventListener('click', function () {
		navigator.clipboard.writeText

	})
}

function changeGradient() {
	const hexNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
	const directionVar = [' right', ' bottom'];

	for (let i = 0; i < 8; i++) {

		let direction = '';
		let hexCode = '';
		let hexCode2 = '';
		let randomNumber = Math.floor(Math.random() * 2)
		direction += directionVar[randomNumber]

		for (let i = 0; i < 6; i++) {
			let randomNumber = Math.floor(Math.random() * hexNumbers.length)
			hexCode += hexNumbers[randomNumber]
		}

		for (let i = 0; i < 6; i++) {
			let randomNumber = Math.floor(Math.random() * hexNumbers.length)
			hexCode2 += hexNumbers[randomNumber]
		}

		//document.getElementsByClassName('gradient_info')[i].innerHTML = hexCode;
		document.getElementsByClassName('gradient_window')[i].style.background = `linear-gradient(to ${direction}, #${hexCode}, #${hexCode2})`;


		let gradientWindow = document.getElementsByClassName('gradient_window')[i];
		let gradientInfo = document.getElementsByClassName('gradient_info')[i];

		gradientWindow.addEventListener('click', function () {
			navigator.clipboard.writeText(document.getElementsByClassName('gradient_window')[i].style.background)
			gradientInfo.classList.add('active');
			setTimeout(() => gradientInfo.classList.remove('active'), 2000)

		})
	}
}