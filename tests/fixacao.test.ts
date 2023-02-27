import {fixacao} from "../src/fixacao"

describe("Teste do exercício de fixação", ()=>{
    test("Função que divide palavra 'div' em string 'd' 'i' 'v'",() =>{
        const palavra = 'div';
        const resultadoEsperado = {palavra:['d', 'i', 'v']}
        const resultadoReal = fixacao(palavra)
        expect(resultadoReal).toEqual(resultadoEsperado)
    })
})