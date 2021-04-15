// from data.js
var tableData = data;

// YOUR CODE HERE!
function handleChange(event) {
    d3.event.preventDefault();
    // grab the value of the input field
    var inputText = d3.event.target.value;
    var tbody = d3.select("tbody");
    //clear table
    tbody.html("");
    data.forEach(function(weatherReport) {
        console.log(weatherReport.datetime);
        console.log(text);
      if (weatherReport.datetime === inputText){
        var row = tbody.append("tr");
        Object.entries(weatherReport).forEach(function([key, value]) {
        // Append a cell to the row for each value
        // in the weather report object
            var cell = row.append("td");
            cell.text(value);
        });
        };
    });
    // Set the output text to the reversed input string
    console.log(inputText);
  }
  var text = d3.select("#datetime");
  text.on("change", handleChange);