import Dolar from "../Dolar";

describe('Livro TDD', () => {
    test('teste multiplicador', () => {
        const five: Dolar = new Dolar(5);
        expect(new Dolar(10)).toEqual(five.times(2));
        expect(new Dolar(15)).toEqual(five.times(3));
    });

    test('test equelity', () => {
        expect(true).toBe(new Dolar(5).equals(new Dolar(5)));
        expect(false).toBe(new Dolar(5).equals(new Dolar(6)));
    })
});

