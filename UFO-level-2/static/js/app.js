// from data.js
var tableData = data;

// YOUR CODE HERE!
function handleChange(event) {
    d3.event.preventDefault();
    var text = d3.select("#datetime");
    // grab the value of the input field
    var inputText = text.property("value");
    var tbody = d3.select("tbody");
    //clear table
    tbody.html("");
    data.forEach(function(weatherReport) {
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
  var button = d3.select(".btn");
  button.on("click", handleChange);
  //filteredData=people.filter(person => person.bloodType === thevalue);
