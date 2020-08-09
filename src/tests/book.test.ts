import Dolar from "../Dolar";

describe('Livro TDD', () => {
    test('teste multiplicador', () => {
        const five: Dolar = new Dolar(5);
        let product: Dolar = five.times(2);
        expect(10).toBe(product.amount);
        product = five.times(3);
        expect(15).toBe(product.amount);
    });
});

