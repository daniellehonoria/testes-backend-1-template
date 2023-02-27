//testes q recebam 2 numeros e retorne um obj com 2 propriedades: -a soma de ambos, a multiplicação de ambos

export interface OperacaoAritmetica{
    soma:number,
    multi:number
}
export const pratica3 =(num1:number, num2:number):OperacaoAritmetica =>{
    const operacao:OperacaoAritmetica ={
        soma: num1 + num2,
        multi: num1 * num2
    }
    return operacao
}
