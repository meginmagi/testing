const sum = require ('./demo1.js');

test('syötteet numeromaisia merkkijonoja, heitetään poikkeus', () => {
    expect(() => {
        sum("jesse", "minna")}).toThrow('ei lukuja');
});