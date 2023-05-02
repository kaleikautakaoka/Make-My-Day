$(document).ready(function () {
  let dateDiv = $("#currentDate");
  let dateApi = dayjs().format("MM/DD/YYYY");
  let currentTime = dayjs().format("h:mm:a");
  let timeDiv = $("#currentTime");

  console.log(dateApi);
  console.info("ready");
  dateDiv.text(dateApi);
  timeDiv.text(currentTime);
});

// $(".btn").on("click", saveEvent) {
  
//   function saveEvent(e) {
//     e.preventDefault();

//     // $("button").click(function () {
//     // $(".current").css("color", "orange");

//     // $(".current").addClass("present");
//     // $(".future").addClass("future");
//     // $(".past").addClass("past");
    
//     // $(".current").removeClass("present");
//     // $(".future").removeClass("future");
//     // $(".past").removeClass("past");
    
//     // });

// $("textarea").keypress(function (event) {
//    console.log(event.key);
//  });
      
//   };
//   };