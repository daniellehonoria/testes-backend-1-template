/*Função que recebe uma string como parâmetro e retorna um array de strings onde cada item 
é uma letra da palavra original. Exemplo: a entrada “dev” gera a saída [”d”, “e”, “v”]

Crie pelo menos um teste que valida sua implementação*/
export interface RetornaArrayComLetras{
    palavra:string[]
}

export const fixacao = (letra: string): RetornaArrayComLetras =>{
    const letraSplit = letra.split("")
    return{palavra:letraSplit}

}