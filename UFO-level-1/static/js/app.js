// from data.js
var tableData = data;

// YOUR CODE HERE!
var text = d3.select("#datetime");
function handleChange(event) {
    // grab the value of the input field
    var inputText = d3.event.target.value;
  
  
    // Set the output text to the reversed input string
    console.log(inputText);
  }
  
  text.on("change", handleChange);