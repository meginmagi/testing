const kolmio = require ('./kpa');

test('Annetaan kolmio korkeus 20 pituus 10 ja kulma 90 astetta', () => {
    expect(kolmio(20,10)).toBe(100);
});

test('Annetaan kolmio korkeus "" Pituus 10 ja kulma 90 astetta', () => {
    expect(() => {
    kolmio(null,10)}).toThrow('ei lukuja');
});

test('Annetaan kolmio korkeus a pituus 10 ja kulma 90 astetta', () => {
expect(() => {
    kolmio("test",2)}).toThrow('ei lukuja');
});