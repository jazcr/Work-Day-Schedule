

var eventDescription = $('.description');
const saveBtn = $('.saveBtn');


const saveLocStor = () => {

    var textValue = $(saveBtn).siblings(".description").val();
    console.log(textValue)
    localStorage.setItem('textValue', textValue)
}

$(".saveBtn").click(saveLocStor);



