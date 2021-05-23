
var jun = moment("2014-06-01T12:00:00Z");
var dec = moment("2014-12-01T12:00:00Z");

var eventDescription = $('.description');
const saveBtn = $('.saveBtn');

$("#currentDay") = jun.tz('America/Denver').format('ha z');  


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

