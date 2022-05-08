// wait until Jquery is ready
$(document).ready();
// Display current date
const currentTime = moment().format("dddd MMMM Do YYYY, h:mm");

// display text
$("#display-date").text(currentTime);

// variable to be added to
const empty = "";

// loop to display times between 9am - 6pm
for (var i = 9; i <= 18; i++) {
  row = $(`<div class="row">`);
  col1 = $(`<div class ="col-lg-2 hour">${displayAmorPm(i)}</div>`);
  col2 = $(
    `<div class ="col-lg-8 inputcontent"><input data-input="${i}" id="inputText${i}" class="form-control inputText" type="text" name="userInput"></div>`
  );
  col3 = $(
    `<div class ="col-lg-2"><button data-id="${i}" id="savePlanner" class="btn btn-success btn-block"><i class="fas fa-save"></i> Save</button></div>`
  );
  row.append(col1);
  row.append(col2);
  row.append(col3);
  $("#display-planner").append(row);
  //get local storage
}

// create row elements to append

//create button and store click to LS

// Convert AM to PM
function displayAmorPm(hour) {
  var b = "";
  if (hour <= 12) {
    b = "AM";
  } else {
    b = "PM";
  }
  hour = hour % 12;
  hour = hour ? hour : 12;
  return hour + " " + b;
}

// Function to get from LS

// Update color - using a loop
updateColor = () => {};
// Interval to update color
setInterval = () => {};
