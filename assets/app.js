// wait until Jquery is ready

// Display current date
const currentTime = moment().format("dddd MMMM Do YYYY, h:mm");

// display text
//get help with centering date

// variable to be added to
// const empty = "";

// loop to display times between 9am - 6pm
const renderTimeBlocks = () => {
  for (let i = 9; i <= 18; i++) {
    const row = $(`<div class="row">`);
    const col1 = $(`<div class ="col-lg-2 hour">${displayAmorPm(i)}</div>`);
    const col2 = $(
      `<div class ="col-lg-8 inputcontent"><input data-input="${i}" id="inputText${i}" class="form-control inputText" type="text" name="userInput"></div>`
    );
    const col3 = $(
      `<div class ="col-lg-2"><button data-id="${i}" id="savePlanner" class="btn btn-success btn-block"><i class="fas fa-save"></i> Save</button></div>`
    );
    row.append(col1);
    row.append(col2);
    row.append(col3);
    $("#display-planner").append(row);
    //get local storage
  }
  $("#display-planner").on("click", storeInput);
};

// create row elements to append

//create button and store click to LS

// Convert AM to PM
function displayAmorPm(hour) {
  let b = "";
  if (hour <= 12) {
    b = "AM";
  } else {
    b = "PM";
  }
  hour = hour % 12;
  hour = hour ? hour : 12;
  return hour + " " + b;
}

const storeInput = (event) => {
  console.log(event.target);
  const target = $(event.target);
  //   localStorage.setItem();
  if (target.is("button")) {
    //get user input then save to LS
    // also save timeblock with LS to know which hour goes with which user input
  }
};
// Function to get from LS

// Update color - using a loop
const updateColor = () => {
  var hour = new Date().getHours();
  for (var i = 9; i <= 18; i++) {
    console.log(hour, i);
    if (hour == i) {
      $(`#inputText${i}`).css("background", "red");
    } else if (hour < i) {
      $(`#inputText${i}`).css("background", "lightblue");
    }
  }
};
setInterval(function () {
  updateColor();
}, 1000);

const onReady = () => {
  $("#display-date").text(currentTime);
  renderTimeBlocks();
  updateColor();
  setInterval();
  // read from local storage - render saved passwords
};

$(document).ready(onReady);
