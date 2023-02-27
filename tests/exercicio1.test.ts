import {exercicio1} from "../src/exercicio1"

describe("Teste do exercício1", ()=>{
    test("Função que transforma string em number", ()=>{
    const n = "50"
    const resultadoEsperado = 50
    const resultadoReal = exercicio1(n)
    expect(resultadoReal).toBe(resultadoEsperado)
})
})