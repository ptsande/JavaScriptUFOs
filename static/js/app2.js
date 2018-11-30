var ufoData = data;
var submit = d3.select("#filter-btn");
var tbody = d3.select(".tbody");

submit.on("click", function() {
    // prevent refresh of the page
    d3.event.preventDefault();
    // select the input element
    var inputElement = d3.select("#datetime");
    // get the value property
    var inputValue = inputElement.property("value");
    // log the date being searched
    console.log(inputValue);
    var filteredData = ufoData.filter(eventDate => eventDate.datetime === inputValue);
    // log the filtered data
    console.log(filteredData);
});

data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
});

// Function to handle input change
function handleChange(event) {
    // grab the value of the input field
    var value = d3.event.target.value;
    // clear the existing output
    //tbody.html("");  
    tbody.html("");
}
tbody.on("change", handleChange);

// var text = d3.select("#text");
// d3.select("#ufo-table").node().value = "";