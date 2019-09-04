// Declaring Initial Variables
var topics = [`nature`, `cats`, `dogs`, `funny`];
var element;
let buttonPrint = $(`#buttonPrint`);
let gifPrint = $(`#gifPrint`);
const queryURL = `https://api.giphy.com/v1/gifs/search?q=${element}&api_key=WiTmT2Gwb1pUPDNjwPHpnf6NZH2JIr4e&limit=10`;

// Function for Printing Initital Buttons on Page
function buttonPrinter() {
  //   empty buttonPrint element
  buttonPrint.empty();
  //   creates a unique button for each 'element' of topics
  topics.forEach(function(element) {
    var newButton = $(`<button>`);
    //   assigns button type, class, and a unique id
    newButton.attr(`type`, `button`);
    newButton.attr(`class`, `btn btn-success`);
    newButton.attr(`id`, element.toLowerCase());

    //   Found code for Capitalize first letter of String: https://joshtronic.com/2016/02/14/how-to-capitalize-the-first-letter-in-a-string-in-javascript/
    element = element.charAt(0).toUpperCase() + element.substring(1);
    newButton.append(element);
    buttonPrint.append(newButton);

    // calls Giphy API to console for coding purpose
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });
  });
}

// Calls function to print initial buttons to page on intial loading of page
buttonPrinter();

// Event delegation for determining button presses with help from: https://davidwalsh.name/event-delegate
document.getElementById("buttonPrint").addEventListener("click", function(e) {
  // e.target is the clicked element!
  if (e.target && e.target.matches(`.btn-success`)) {
    // List item found!  Output the ID!
    console.log(e.target.id);
    let element = e.target.id;
    $.ajax({
        url: queryURL
        method: "GET"
    }).then(function(response) {
        console.log(response);
    })
  }
});
