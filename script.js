
var eventDescription = $('.description');
const saveBtn = $('.saveBtn');

//display current time on page
function updateTime(){
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').html( currentTime );
};

//keep time current by updating by one second
setInterval(function(){
   updateTime();
}, 1000);


// function to set background colors for divs, depending on if they're past/present/future
function setBgColors() {
    //sets currentHour = the current hour, from moment.js
    const currentHour = parseInt(moment().format("H"));
    

    $(".description").each(function () {
        //gives elHour (the hour pulled from parseInt) an ID
        var elHour = parseInt($(this).attr("id"));
        console.log($(this));
        
        //changes description box depending if the time slot is past/present/future
        if (elHour < currentHour) {
            $(".time-block").addClass("past")
        } else if (elHour > currentHour) {
            $(".time-block").addClass("future")
        } else {
          $(".time-block").addClass("present")
        }
    });
}

setBgColors();

//function that saves items to localstorage
$(".saveBtn").on("click", function(){
    console.log($(this))
    var textValue = $(this).siblings(".description").val();
    var timeValue = $(this).siblings(".hour").text();
    console.log(timeValue)
    localStorage.setItem(timeValue, textValue)
});


// displays localstorage on refresh
$("#9").val(localStorage.getItem("9am"));
$("#10").val(localStorage.getItem("10am"));
$("#11").val(localStorage.getItem("11am"));
$("#12").val(localStorage.getItem("12pm"));
$("#13").val(localStorage.getItem("1pm"));
$("#14").val(localStorage.getItem("2pm"));
$("#15").val(localStorage.getItem("3pm"));
$("#16").val(localStorage.getItem("4pm"));
$("#17").val(localStorage.getItem("5pm"));
