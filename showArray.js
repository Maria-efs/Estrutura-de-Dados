'use strict'

const showArray = (array, element, title = 'ARRAY') => {
    const container = document.querySelector(element) //Selecionando um elemento no DOM
    const div = document.createElement('div') //Criando um novo elemento (div)
    div.classList.add('numbers-container') //adicionando uma class para a div criada

    //Preenchendo a div criada com os elementos do array
    div.innerHTML = `
    <h2>${title}</h2>
    <div class = "numbers-item">
    ${array.join ('</div> <div class="numbers-item">')} 
    </div>` //o join retorna um array como uma string.

    container.appendChild(div) //inserindo a div no DOM, no html

}

export {
    showArray
}

/**************************************************************
 *              Comandos novos
 * querySelector: seleciona um ELEMENTO do HTML
 *          ELEMENTO É DIFERENTE DE CLASS
 * createElement: cria um novo elemento 
 * classList.add: cria uma class para um elemento novo
 * innerHTML: adiciona ou pega elementos HTML
 * join: retorna um array como uma string
 * appendChild: adiciona um elemento como último elemento do HTML
 * 
 *  NÃO USAR INNER HTML NOS ELEMENTOS DO DOM (main, footer...)
 *
 **************************************************************/