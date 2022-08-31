'use strict'

import  { showArray } from "./showArray.js"

const numbers = [23, 5, 9, 10, 100, 45]

//recebendo cada elemento e devolvendo o number descontando 2 (callBack)
const desconto2 = (number) => number - 2
const numbersDesconto = numbers.map (desconto2) //leva os numbers pra function e recebe eles modificados

//Filtrar os elementos menores que 20
const menor20 = (valor) => valor < 20
const valoresMenores20 = numbers.filter(menor20)

//Somando todos os valores do array
const soma = (a, b) => a + b
const valorTotal = numbers.reduce(soma, 0) //O 0 é um acumulador

//1 - Aumentar 100 em cada elemento
const somar100 = (number) => number + 100
const numberSoma100 = numbers.map (somar100)

//2 - Somente os números pares
const somentePares = (number) => number%2 == 0
const pares = numbers.filter(somentePares)

//3 - Total dos valores com desconto de R$4
const desconto4 = (number) => number - (number + 4)
const numbersDesconto4 = numbers.map (desconto4)

//4 - Array com todos os elementos ímpares somando 21


showArray (numbers, 'main', 'Array') //dentro dos () esta os parmetros da function
showArray (numbers, 'main', 'Array') //adicionando outro show array
showArray(numbersDesconto, 'main', 'Descontos de R$4') //exibindo o array modificado pelo map
showArray (valoresMenores20, 'main', 'Valores menores que 20') //exibindo o array modificado pelo filter
showArray([valorTotal], 'main', 'Valor total') //exibindo o valor com a soma de todos os numbers
showArray(numberSoma100, 'main', 'Números + 100') //exibindo o valor somando 100
showArray(pares, 'main', 'Números pares') //exibindo somente pares
showArray(numbersDesconto4, 'main', 'Desconto de R$4')
 
/************************************************************
 *                      MAP
 *                  (mapeando)
 * Percorre o array e retorna um array do msm tamanho 
 * modificado ou não
 * Sintaxe - array.map(callBack)
 * Parametros do callBack
 *   1 - Elemento
 *   2 - Indice
 *   3 - Array
 ************************************************************/

/************************************************************
 *                      FILTER
 * Percorre o array aplicando um callBack e retorna um array
 * do mesmo tamanho ou não, isso vai depender de acordo com
 * oq a function do filter está fazendo
 * Sintaxe - array.filter (callBack)
 * Parametros do callBack
 *   1 - Elemento
 *   2 - Indice
 *   3 - Array
 * 
 * Retorno do callBack tem que ser um booleano (true ou false)
 ************************************************************/

/************************************************************
 *                      REDUCE
 * Percorre o array aplicando um callBack e retorna um único 
 * valor, ou seja, ele não retorna um array, por isso que na 
 * exibição foi necessário colocar o valor toral dentro de [],
 * porque o showArray exibi somente arrays
 * Sintaxe - array.reduce (callBack)
 * Parametros do callBack
 *   1 - Acumulador
 *   2 - Elemento
 *   3 - Indice
 *   4 - Array
 * O valor inicial pode ser qualquer tipo de variavel
 * O acumulador serve para guardar o valor, soma a + b e o resultado
 * vai ficar no acumulador e depois ele será somado com outro
 * number até o final do array.
 * O 0 é usado como acumulador pq ele será o valor inicial e 
 * não vai atrapalhar a conta
 ************************************************************/
