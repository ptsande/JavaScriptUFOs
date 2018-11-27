var tableData = data;
var submit = d3.select("#filter-btn");

submit.on("click", function(){
    // prevent refresh of the page
    d3.event.preventDefault();
    // select the input element
    var inputElement = d3.select("#datetime");
    // get the value property
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData);
});