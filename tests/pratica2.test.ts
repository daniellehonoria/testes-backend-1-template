import {pratica2} from "../src/pratica2"
describe("Teste pratica 2", () => {
    test("A função recebe um parametro e retorna null caso seja diferente de 'number'", () => {
        const result = pratica2("1" as any)
        expect(result).toBeNull()
    })

    test("A função recebe um numero e se for diferente de um numero inteiro, deve retornar true", () => {
        const result = pratica2(101.4)
        expect(result).toBeNull()
    })

    test("A função recebe um numero e se for impar, deve retornar false", () => {
        const result = pratica2(5)
        expect(result).toBeFalsy()
    })

    test("A função recebe um numero e se for par, deve retornar true", () => {
        const result = pratica2(4)
        expect(result).toBeTruthy()
    })
}
)