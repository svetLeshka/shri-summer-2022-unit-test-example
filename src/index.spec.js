import { testFunction } from '.';

describe('Модуль для проверки корректных ИНН на истинность/ложность', () => {
	it('Проверка корректного ИНН-строки на истинность для 12 знаков', () => {
		expect(testFunction("526317984689")).toBeTruthy();
	});
	it('Проверка корректного ИНН-строки на ложность для 12 знаков', () => {
		expect(testFunction("516317984689")).toBeFalsy();
	});
	it('Проверка корректного ИНН-строки на истинность для 10 знаков', () => {
		expect(testFunction("7830002293")).toBeTruthy();
	});
	it('Проверка корректного ИНН-строки на ложность для 10 знаков', () => {
		expect(testFunction("7730002293")).toBeFalsy();
	});
	it('Проверка корректного ИНН-числа на истинность для 12 знаков', () => {
		expect(testFunction(526317984689)).toBeTruthy();
	});
	it('Проверка корректного ИНН-числа на ложность для 12 знаков', () => {
		expect(testFunction(516317984689)).toBeFalsy();
	});
	it('Проверка корректного ИНН-числа на истинность для 10 знаков', () => {
		expect(testFunction(7830002293)).toBeTruthy();
	});
	it('Проверка корректного ИНН-числа на ложность для 10 знаков', () => {
		expect(testFunction(7730002293)).toBeFalsy();
	});
});

describe('Модуль для проверки корректности полученного ИНН', () => {
	it('Вернёт false, когда пустая строка', () => {
		expect(testFunction('')).toBeFalsy();
	});
	it('Вернёт false при наличии пробела в начале ИНН', () => {
		expect(testFunction(' 773000229')).toBeFalsy();
	});
	it('Вернёт false при наличии пробела в ИНН', () => {
		expect(testFunction('7730 00223')).toBeFalsy();
	});
	it('Вернёт false при наличии пробела в конце ИНН', () => {
		expect(testFunction('773000229 ')).toBeFalsy();
	});
	it('Вернёт false, когда введены лишние символы (не цифры)', () => {
		expect(testFunction('77@00-f293')).toBeFalsy();
	});
	it('Вернёт false, когда символов будет меньше 10', () => {
		expect(testFunction('773000229')).toBeFalsy();
	});
	it('Вернёт false, когда цифр будет меньше 10', () => {
		expect(testFunction(773000229)).toBeFalsy();
	});
	it('Вернёт false, когда символов будет 11', () => {
		expect(testFunction('51631798468')).toBeFalsy();
	});
	it('Вернёт false, когда цифр будет 11', () => {
		expect(testFunction(51631798468)).toBeFalsy();
	});
	it('Вернёт false, когда символов будет больше 12', () => {
		expect(testFunction('5163179846822')).toBeFalsy();
	});
	it('Вернёт false, когда цифр будет больше 12', () => {
		expect(testFunction(5163179846822)).toBeFalsy();
	});
	it('Вернёт false, если получено не строка и не число, например, массив', () => {
		expect(testFunction([2, 3, [5, 7]])).toBeFalsy();
	});
	it('Вернёт false, если получено не строка и не число, например, функция', () => {
		expect(testFunction(() => { })).toBeFalsy();
	});
	it('Вернёт false, если получено не строка и не число, например, объект', () => {
		expect(testFunction({ ITN: '7830002293' })).toBeFalsy();
	});
});
