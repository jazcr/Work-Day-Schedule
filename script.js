

var eventDescription = document.querySelector('.description');
const saveBtn = document.querySelector('.saveBtn');


const saveLocStor = () => {
    textareaObject.value = text
    localStorage.setItem('textInput', text.textContent)
}

saveBtn.addEventListener('click', saveLocStor)
