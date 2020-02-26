let listElement = document.querySelector('div#app ul')
let inputElement = document.querySelector('div#app input')
let buttonElement = document.querySelector('div#app button')

let toDos = JSON.parse(localStorage.getItem('list_todos')) || []  //caso não consiga retornar um valor aceitável para a 1ª operação, atribuirá vetor vazio

// Renderizar toDos
function renderToDos() {
    listElement.innerHTML = ''  //limpa a lista de elementos anterior sempre que houver uma nova renderização (para não colocar novamente os elem que já estão)

    for (todo of toDos) {
        let toDoElement = document.createElement('li')
        let toDoText = document.createTextNode(todo)  //propria variavel pode ser adicionada (contém o texto de cada to do)

        let linkElement = document.createElement('a')
        
        linkElement.setAttribute('href', '#')  //adiciona href ao link criado

        let pos = toDos.indexOf(todo)  //procura dentro do array o indíce do elemento atual que está passando pela função
        linkElement.setAttribute('onclick', `deleteToDo(${pos})`)

        let linkText = document.createTextNode('Excluir')  //texto dentro do elemento

        linkElement.appendChild(linkText)

        toDoElement.appendChild(toDoText)
        toDoElement.appendChild(linkElement)

        listElement.appendChild(toDoElement)
        }
    }

    renderToDos()

    // Adicionar toDos
    function addToDo() {
        inputElement.focus()

        let toDoText = inputElement.value  //valor do input

        // Verifica se o valor do input está vazio
        if(toDoText == '') {
            alert('Insira algum item na lista !')

            inputElement.focus()
        } else {
            toDos.push(toDoText)  //adiciona o valor do input ao array
    
            inputElement.value = ''  //apaga o valor atual que está escrito no input
    
            renderToDos()  //renderiza todos os todos novamentes com o novo que foi adicionado ao final do array
    
            savetoStorage()  //salva dados no storage do navegador
        }

    }

    buttonElement.onclick = addToDo  //executa a adição somente no clique do botão

    function deleteToDo(position) {
        toDos.splice(position, 1)  //remover próximo item a partir do item atual que usuário clicar (position)
        renderToDos()              //renderizar novamente
        savetoStorage()            //salva dados no storage do navegador

        inputElement.focus()
    }

    // Salva a lista de valores localmente no armazenamento do navegador
    function savetoStorage() {
        localStorage.setItem('list_todos', JSON.stringify(toDos))  //transforma o vetor em uma string JSON
    }        