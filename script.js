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

$("#5").siblings(".taskInput").val(localStorage.getItem("5"))
$("#6").siblings(".taskInput").val(localStorage.getItem("6"))
$("#7").siblings(".taskInput").val(localStorage.getItem("7"))
$("#8").siblings(".taskInput").val(localStorage.getItem("8"))






