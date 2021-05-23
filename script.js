
var eventDescription = $('.description');
const saveBtn = $('.saveBtn');

//display current time on page
function updateTime(){
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
   $('#currentDay').html( currentTime );
};

//keep time current by updating by one second
updateTime();
setInterval(function(){
   updateTime();
}, 1000);

//if current time is less than the time block, change color of div to grey
if (updateTime() < $("#hour").text) {
    $(".time-block").addClass("past")
} 
    //if current time equal to the time block, change color of div to red
    else if (updateTime() == $("#hour".text)) {
    $(".time-block").addClass("present")
}
    //if current time is greater than time block, change color of div to green
    else {
    $(".time-block").addClass("future")
}

$(".saveBtn").on("click", function(){
    console.log($(this))
    var textValue = $(this).siblings(".description").val();
    var timeValue = $(this).siblings(".hour").text();
    console.log(timeValue)
    localStorage.setItem(timeValue, textValue)
});



$(".9am").val(localStorage.getItem("9am"));
$(".10am").val(localStorage.getItem("10am"));
$(".11am").val(localStorage.getItem("11am"));
$(".12pm").val(localStorage.getItem("12pm"));
$(".1pm").val(localStorage.getItem("1pm"));
$(".2pm").val(localStorage.getItem("2pm"));
$(".3pm").val(localStorage.getItem("3pm"));
$(".4pm").val(localStorage.getItem("4pm"));
$(".5pm").val(localStorage.getItem("5pm"));
$(".9am").val(localStorage.getItem("9am"));

// for each time value item , get the text value from local storage

