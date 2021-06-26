$("#currentDay").text(moment().format("MMMM Do YYYY"))

$(".timeBlock").each(function(){
var currentTime = moment().hours()
var currentHour = parseInt($(this).attr("id"))
console.log(currentTime, currentHour)
if (currentHour <= currentTime - 1) {
    $(this).siblings(".taskInput").addClass("past")
}

else if (currentHour === currentTime) {
    $(this).siblings(".taskInput").addClass("present")
}

else if (currentHour >= currentTime + 1) {
    $(this).siblings(".taskInput").addClass("future")
}
})  
    


$(".saveBtn").click(function(){
    var text = $(this).siblings(".taskInput").val()
    var name = $(this).siblings(".timeBlock").attr("id")

    console.log(text)
    localStorage.setItem(name, text)
})

$("#9").siblings(".taskInput").val(localStorage.getItem("9"))
$("#10").siblings(".taskInput").val(localStorage.getItem("10"))
$("#11").siblings(".taskInput").val(localStorage.getItem("11"))
$("#12").siblings(".taskInput").val(localStorage.getItem("12"))
$("#1").siblings(".taskInput").val(localStorage.getItem("1"))
$("#2").siblings(".taskInput").val(localStorage.getItem("2"))
$("#3").siblings(".taskInput").val(localStorage.getItem("3"))
$("#4").siblings(".taskInput").val(localStorage.getItem("4"))
$("#5").siblings(".taskInput").val(localStorage.getItem("5"))






