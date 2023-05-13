//Vars for date, time, and divs
const a = dayjs();
let currentdateDiv = $("#currentDate");
let currenttimeDiv = $("#currentTime");
let presentHour = $("#presentHourDiv");
let futureHour = $("#futureTimeDiv");
let pastHour = $("#pastTimeDiv");
let currentHour = a.format("h");
console.log(currentHour);
let divValue = $(".col-2").val();
let row = $(".row");
let dateApi = a.format("MM/DD/YYYY");
const b = a.add(8, "hour");
console.log(b);
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

//   .past {
//   background - yellow
//   color: white;
// }
  
//   .future {
//   background - blue
//   color: white;
// }
  
//   .present {
//   background - color: green;
//   color: white;
// }

//   .savedEvent {
//   background - color: rgb(250, 28, 28);
// }
// let allTimeDivs = $("#allTimes");
let hours = [9, 10, 11, 12, 1, 2, 3, 4, 5,];
let divs = $("#allTimes")

function callback(now) {
  return (($(this).hour() !== 1) ? 's' : '') + ']' + now.format();
}

function createPast() {
  $(".row").addClass("past");
  }

function createPresent() {
  $(".row").addClass("present");
}

function createFuture() {
  $(".row").addClass("future");
}

function dynamicCalander() {
  //Dynamically created time blocks
  //Present Time
  presentHour.append(` <div class="row time-block" id="${hours[0]}" value="9">
        <div class="col-2 col-md-1 hour text-center py-3" value="9"> ${hours[0]} AM </div>
        <textarea class="col-8 col-md-10 description" id="text" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save" value="form">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save-fill" viewBox="0 0 16 16">
            <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z"/>
          </svg>
        </button>
      </div>`);
  
  
  //Future Time
  futureHour.append(` <div class="row time-block future" id="${hours[1]}" value="10">
        <div class="col-2 col-md-1 hour text-center py-3" value="10">${hours[1]} AM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save" value="form">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save-fill" viewBox="0 0 16 16">
            <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z"/>
          </svg>
        </button>
      </div> `);
  
  //Past Time
  pastHour.append(` <div class="row time-block past" id="${hours[2]}" value="11">
        <div class="col-2 col-md-1 hour text-center py-3" value="11">${hours[2]} AM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save" value="form">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save-fill" viewBox="0 0 16 16">
            <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z"/>
          </svg>
        </button>
      </div>
  
      <div class="row time-block past" id="${hours[3]}" value="12">
        <div class="col-2 col-md-1 hour text-center py-3" value="12">${hours[3]} PM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save" value="form">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save-fill" viewBox="0 0 16 16">
            <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z"/>
          </svg>
        </button>
      </div>
  
      <div id="${hours[4]}" class="row time-block past" value="1">
        <div class="col-2 col-md-1 hour text-center py-3 value="1">${hours[4]} PM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save" value="form">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save-fill" viewBox="0 0 16 16">
            <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z"/>
          </svg>
        </button>
      </div>
  
      <div id="${hours[5]}" class="row time-block past" value="2">
        <div class="col-2 col-md-1 hour text-center py-3" value="2">${hours[5]} PM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save" value="form">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save-fill" viewBox="0 0 16 16">
            <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z"/>
          </svg>
        </button>
      </div>
  
      <div id="${hours[6]}" class="row time-block past" value="3">
        <div class="col-2 col-md-1 hour text-center py-3" value="3">${hours[6]} PM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save" value="form">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save-fill" viewBox="0 0 16 16">
            <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z"/>
          </svg>
        </button>
      </div>
  
      <div id="${hours[7]}" class="row time-block past">
        <div class="col-2 col-md-1 hour text-center py-3">${hours[7]} PM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save" value="form">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save-fill" viewBox="0 0 16 16">
            <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z"/>
          </svg>
        </button>
      </div>
  
      <div id="${hours[8]}" class="row time-block past">
        <div class="col-2 col-md-1 hour text-center py-3">${hours[8]} PM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save" value="form">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save-fill" viewBox="0 0 16 16">
            <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z"/>
          </svg>
        </button>
      </div> `);
  
  createPresent();
  createFuture();
  createPast();

}
        
$("button").on("click", function (event) {
  event.preventDefault();
  // let savedInLocal = $(this).prev().val();
  // localStorage.setItem($(this).)

});
      