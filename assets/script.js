const saveBtn = document.querySelectorAll(".btn");
const testBtn = document.getElementById("test-btn");



// <!-- Example of a past time block. The "past" class adds a gray background color. -->
// <div id="hour-9" class="row time-block past">
//   <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
//   <label class="text-black">Add your event!</label>
//   <input class="form-control m-auto" type="text" name="add" />
//   <button class="btn saveBtn col-2 col-md-1" aria-label="save">
//     <i class="fas fa-save" aria-hidden="true"></i>
//   </button>
// </div>

// const addAppointment = document.querySelectorAll('.description');
// alert('it works');

// const dayjs = require('dayjs')
// //import dayjs from 'dayjs' // ES 2015
// dayjs().format()
// dayjs.locale('de') // use locale globally
// dayjs().locale('de').format() // use locale in a specific instance

// addAppointment.addEventListener('submit', e => {
//  e.preventDefault();
//  const list = addAppointment.past.value;
//  console.log(list);

// });

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  
