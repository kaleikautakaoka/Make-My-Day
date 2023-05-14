//Vars for date, time, and divs
const a = dayjs();
let currentdateDiv = $("#currentDate");
let currenttimeDiv = $("#currentTime");
let textBox = $("#textBoxes");
let currentHour = a.hour();
console.log(currentHour);
let row = $(".row");
let dateApi = a.format("MM/DD/YYYY");
// const b = a.add(8, "hour");
// console.log(b);
let currentTime = a.format("h:mm:a");

//Document ready function to ensure page is ready before events
$(document).ready(function () {
  //Current Time
  currentdateDiv.text(dateApi);
  currenttimeDiv.text(currentTime);
  dynamicCalander();  
  $("button").on("click", function () {
    $(this).css("background-color", "pink");
    $("textarea").trigger("keyup");
    console.log($("textarea"));
  });
})

let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let divs = $("#allTimes")

function callback(now) {
  return (($(this).hour() !== 1) ? 's' : '') + ']' + now.format();
}

function createPast(selector) {
  selector.children("textarea").addClass("past");
  }

function createPresent(selector) {
  selector.children("textarea").addClass("present");
}

function createFuture(selector) {
  selector.children("textarea").addClass("future");
}

function dynamicCalander() {
  //Dynamically created time blocks
  for(i = 0; i < hours.length; i++){
    textBox.append(` <div class="row time-block past" id="${hours[i]}" value="11">
          <div class="col-2 col-md-1 hour text-center py-3" value="11">${hours[i]} AM</div>
          <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
          <button class="btn saveBtn col-2 col-md-1" aria-label="save" value="form">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save-fill" viewBox="0 0 16 16">
              <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z"/>
            </svg>
          </button>
        </div>`)
   
  }
  
  for(i = 0; i < hours.length; i++){
    let selector = $("#"+ hours[i])
    if(currentHour === hours[i]){
      createPresent(selector);
    }else if(hours[i] < currentHour){
      createPast(selector);
    }else{
      createFuture(selector);
    }
  }

}
        
$("button").on("click", function (event) {
  event.preventDefault();
  // let savedInLocal = $(this).prev().val();
  // localStorage.setItem($(this).)

});
      