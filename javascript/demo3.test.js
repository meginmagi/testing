const sum = require ('./demo1.js');

test('annetaan vain yksi parametri, palautetaan luku itse', () => {
	expect(sum(4)).toBe(4);
});