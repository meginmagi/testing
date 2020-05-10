const sum = require ('./demo1');

test('syötteet numeromaisia merkkijonoja', ()=> {
    expect(sum("1", "2")).toBe(3);
});