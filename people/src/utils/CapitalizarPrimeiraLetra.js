/* 
Deixa a primeira letra de uma string em maiscula 
Ex: exemplo retornará Exemplo
*/
const capitalizarPrimeiraLetra = string => {
    return string[0].toUpperCase() + string.slice(1)
}

export default capitalizarPrimeiraLetra;