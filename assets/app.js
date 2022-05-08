// Display current date
const currentTime = moment().format("dddd MMMM Do YYYY, h:mm");

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
    getlocalStorage(i);
  }
  $("button.btn.btn-success").click(function (e) {
    var id = $(this).data("id");
    var inputText = $(this).parent().siblings().find("input").val();
    localStorage.setItem(id, inputText);
  });
};

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

function getlocalStorage(hour) {
  let inputval = localStorage.getItem(hour);
  if (true) {
    //  $("input").data(`input${hour}`)
    var text = $(`input#inputText${hour}`).val(inputval);
    console.log(text);
  }
}

// Update color - using a loop
const updateColor = () => {
  var hour = new Date().getHours();
  for (var i = 9; i <= 18; i++) {
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

const getLocalStorage = (hour) => {
  const userLocal = localStorage.getItem(hour);
  if (true) {
    var text = $(`input#inputText${hour}`).val(userLocal);
  }
};

const onReady = () => {
  $("#display-date").text(currentTime);
  renderTimeBlocks();
  updateColor();
  setInterval();
  getLocalStorage();
  // read from local storage - render saved passwords
};

$(document).ready(onReady);
