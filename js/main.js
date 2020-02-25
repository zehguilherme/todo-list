let listElement = document.querySelector('div#app ul')
let inputElement = document.querySelector('div#app input')
let buttonElement = document.querySelector('div#app button')

let toDos = [
    'Teste 1',
    'Teste 2',
    'Teste 3'
]

// Renderizar
function renderToDos() {
    listElement.innerHTML = ''  //limpa a lista de elementos anterior sempre que houver uma nova renderização (para não colocar novamente os elem que já estão)

    for (todo of toDos) {
        let toDoElement = document.createElement('li')
        let toDoText = document.createTextNode(todo)  //propria variavel pode ser adicionada (contém o texto de cada to do)

        toDoElement.appendChild(toDoText)
        listElement.appendChild(toDoElement)
        }
    }

    renderToDos()

    // Adicionar
    function addToDos() {
        let toDoText = inputElement.value  //valor do input

        toDos.push(toDoText)  //adiciona o valor do input ao array

        inputElement.value = ''  //apaga o valor atual que está escrito no input

        renderToDos()  //renderiza todos os todos novamentes com o novo que foi adicionado ao final do array
    }

    buttonElement.onclick = addToDos  //executa a adição somente no clique do botão