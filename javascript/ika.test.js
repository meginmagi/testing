const ika = require ('./ika');

test('Annetaan ika 18', () => {
    expect(ika(18)).toBe(true);
});

test('Annetaan ika 3', () => {
    expect(ika(3)).toBe(false);
});

test('Annetaan ika 99', () => {
    expect(ika(99)).toBe(true);
});

test('Annetaan ika test', () => {
    expect(() => { ika("test")}).toThrow('ei lukuja');
});