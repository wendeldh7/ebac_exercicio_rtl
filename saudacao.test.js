const { describe } = require('node:test')
const saudacao = require('./saudacao')

describe('Teste para saudacao', () => {
    test('Deverá retornar Olá, Maria', () => {
        const olaMaria = saudacao.dizOla('Maria')
        expect(olaMaria).toBe('Olá, Maria')
    })
})