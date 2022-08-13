export const testFunction = (input) => {
	if (String(input).includes(' ')) return false;
	else if (!(typeof input === 'number' || typeof input === 'string')) return false;
	const numInput = String(input).split('').map(sym => Number(sym));
	if (numInput.some((item) => isNaN(item))) return false;
	else if (numInput.length == 10) {
		const coeffs = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
		let number = 0;
		for (let i = 0; i < 10; i++) {
			number += coeffs[i] * numInput[i];
		}
		number %= 11;
		if (number > 9) number %= 10;
		return numInput[9] === number;
	} else if (numInput.length == 12) {
		const coeffs1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
		let number1 = 0;
		for (let i = 0; i < 11; i++) {
			number1 += coeffs1[i] * numInput[i];
		}
		number1 %= 11;
		if (number1 > 9) number1 %= 10;
		const coeffs2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
		let number2 = 0;
		for (let i = 0; i < 12; i++) {
			number2 += coeffs2[i] * numInput[i];
		}
		number2 %= 11;
		if (number2 > 9) number2 %= 10;
		return numInput[10] === number1 && numInput[11] === number2;
	}
	return false;
}