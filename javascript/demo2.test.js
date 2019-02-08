test('syötteet numeromaisia merkkijonoja, heitetään poikkeus', () => {
    expect(() => {
        sum("jesse", "minna")}).toThrow('ei lukuja');
});