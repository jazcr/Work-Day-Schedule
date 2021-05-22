

var eventDescription = document.querySelector('.description');
const saveBtn = document.querySelector('.saveBtn');


const saveLocStor = () => {
    const textValue = eventDescription.value;
    console.log(textValue)
    localStorage.setItem('textValue', textValue)
}

saveBtn.addEventListener('click', saveLocStor)
