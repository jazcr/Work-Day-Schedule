

var eventDescription = $('.description');
const saveBtn = $('.saveBtn');


$( ".saveBtn" ).each(function( index ) {
    $(this).on("click", function(){
        var textValue = $(saveBtn).siblings(".description").val();
        localStorage.setItem('textValue', textValue)
    });

});



// const saveLocStor = () => {
//     var textValue = $(saveBtn).siblings(".description").val();
//     console.log(textValue)
//     localStorage.setItem('textValue', textValue)

// }

// $(".saveBtn").click(saveLocStor);

