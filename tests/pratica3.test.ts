import{pratica3} from '../src/pratica3'

describe("Testar arquivo pratica3.ts", () =>{
    
    test("Função que recebe 2 numeros e retorna objeto co duas propriedades: soma e multi", () =>{
        const result = pratica3(3 , 5)
        const expectResult = {
            soma:8,
            multi:15
        }
        expect(result).toEqual(expectResult)
    })
})