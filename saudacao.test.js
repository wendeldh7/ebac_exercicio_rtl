const saudacao = require('./saudacao')

describe('teste para saudacao'. () => {
    test('teste deverar retornar Olá, Maria', () => {
        expect(saudacao('Maria')).toBe('Olá, Maria')
    })
})