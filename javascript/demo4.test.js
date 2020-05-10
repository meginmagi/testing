const sum = require ('./demo1.js');

test('parametrit puuttuvat, heitetään poikkeus', () => { 
	expect(() => {
	sum()}).toThrow('ei parametreja');
});