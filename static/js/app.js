var tableData = data;
var submit = d3.select("#filter-btn");
var tbody = d3.select("tbody");

submit.on("click", function(){
    // prevent refresh of the page
    d3.event.preventDefault();
    // select the input element
    var inputElement = d3.select("#datetime");
    // get the value property
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(eventDate => eventDate.datetime === inputValue);
    console.log(filteredData);
});

data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
});

// // Function to handle input change
// function handleChange(event) {
//     // grab the value of the input field
//     var value = d3.event.target.value;
  
//     // clear the existing output
//     tbody.html("");
  
//     var frequencyCounts = counter(value);
//     Object.entries(frequencyCounts).forEach(([key, value]) => {
//       var li = tbody.append("li").text(`${key}: ${value}`);
//     });  
// }
  
// text.on("change", handleChange);