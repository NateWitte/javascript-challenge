// from data.js
var tableData = data;

// YOUR CODE HERE!
function handleChange(event) {
    d3.event.preventDefault();
    // grab the value of the input field
    var inputDate = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");
    filtereddata=data;
    if (inputDate){
      filtereddata=filtereddata.filter(sighting => sighting.datetime === inputDate);
    };
    if (inputCity){
      filtereddata=filtereddata.filter(sighting => sighting.city === inputCity);
    };
    if (inputState){
      filtereddata=filtereddata.filter(sighting => sighting.state === inputState);
    };
    if (inputCountry){
      filtereddata=filtereddata.filter(sighting => sighting.country === inputCountry);
    };
    if (inputShape){
      filtereddata=filtereddata.filter(sighting => sighting.shape === inputShape);
    };
    var tbody = d3.select("tbody");
    //clear table
    tbody.html("");
    filtereddata.forEach(function(weatherReport) {
        var row = tbody.append("tr");
        Object.entries(weatherReport).forEach(function([key, value]) {
        // Append a cell to the row for each value
        // in the weather report object
            var cell = row.append("td");
            cell.text(value);
        });
    });
  }
  var button = d3.select(".btn");
  button.on("click", handleChange);
  //filteredData=people.filter(person => person.bloodType === thevalue);
