const calc = require('./calculadora')

test('somar 2 e 2 dever resultar em 4', () => {
    const minhaSoma = calc.soma(2, 2)

    expect(minhaSoma).toBe(4)
})