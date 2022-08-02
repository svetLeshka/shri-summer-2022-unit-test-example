import {testFunction} from '.';

describe('Тестовая функция, для наглядного примера', () => {
    it('Складывает два числа вместе', () => {
        expect(testFunction(2, 3)).toBe(5);
    });
});
