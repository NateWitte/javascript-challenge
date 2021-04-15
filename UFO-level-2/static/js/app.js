// from data.js
var tableData = data;

// YOUR CODE HERE!
function handleChange(event) {
    d3.event.preventDefault();
    var date = d3.select("#datetime");
    // grab the value of the input field
    var inputDate = date.property("value");
    filtereddata=data;
    if (inputDate){
      filtereddata=filtereddata.filter(sighting => sighting.datetime === inputDate);
    };
    var tbody = d3.select("tbody");
    //clear table
    tbody.html("");
    data.forEach(function(weatherReport) {
      if (weatherReport.datetime === inputDate){
        var row = tbody.append("tr");
        Object.entries(weatherReport).forEach(function([key, value]) {
        // Append a cell to the row for each value
        // in the weather report object
            var cell = row.append("td");
            cell.text(value);
        });
        };
    });
  }
  var button = d3.select(".btn");
  button.on("click", handleChange);
  //filteredData=people.filter(person => person.bloodType === thevalue);
