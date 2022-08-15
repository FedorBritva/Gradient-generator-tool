
function changeGradient() {
	let hexNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

	let hexCode = '';

	for (let i = 0; i < 6; i++) {
		let randomNumber = Math.floor(Math.random() * hexNumbers.length)
		hexCode += hexNumbers[randomNumber]
	}
	document.getElementById('hex-code').innerHTML = hexCode;
	document.querySelector('body').style.background = '#' + hexCode;

}