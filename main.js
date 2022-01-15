// add skills by typing a form box and clicking add skill to add text to the my developer skills list 

//append text to list 

//function on click 

const rowInput = (...dataValues) => {
    const inputText = $('#input_skillText').val()
    $('.skillList li').last().append(inputText)
    // $('.skillList').append(inputText)
}

addItemToList = (skillToBeAdded) => {

    const liElem = $('<li>') // create LI elem

    // const buttonElem = // createButtonElement
    //     buttonElement.textContent = 'X'
    const buttonElem = $('<button>', {
        html: "X",
        id: "btn_delete"
    })
    buttonElem.on('click', () => {
        liElem.remove()
    })

    liElem.append(buttonElem)
    liElem.append(skillToBeAdded)

    $('.skillList').append(liElem)
}

$('#btn_addList').click(() => {
    const inputValue = $('#input_skillText').val()
    addItemToList(inputValue)
});

const initialize = () => {
    addItemToList('Cascading Style Sheets (CSS)')
    addItemToList('Hyper Text Markup Language (HTML)')
}

initialize()


