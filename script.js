

var eventDescription = $('.description');
const saveBtn = $('.saveBtn');



    $(".saveBtn").on("click", function(){
        console.log($(this))
        var textValue = $(this).siblings(".description").val();
        var timeValue = $(this).siblings(".hour").text();
        console.log(timeValue)
        localStorage.setItem(timeValue, textValue)
    });




