// Declaring Initial Variables
var topics = [`nature`, `cats`, `dogs`, `funny`];
let buttonPrint = $(`#buttonPrint`);

// Printing Initital Buttons on Page
topics.forEach(function(element) {
  var newButton = $(`<button>`);
  newButton.attr(`type`, `button`);
  newButton.attr(`class`, `btn btn-success`);
  newButton.attr(`id`, element);
  //   Found code for Capitalize first letter of String: https://joshtronic.com/2016/02/14/how-to-capitalize-the-first-letter-in-a-string-in-javascript/
  element = element.charAt(0).toUpperCase() + element.substring(1);
  newButton.append(element);
  buttonPrint.append(newButton);
});
