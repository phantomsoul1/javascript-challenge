// from data.js
var tableData = data;

// YOUR CODE HERE!

// Function to display an array of sightings
// This optimizes reusability, since it is used
// by both the initial process to display all
// sightings, as well as by the filter process
// to display sightings from the selected date.
function display(displayData) {
    tbody = d3.select("#ufo-table").select("tbody");

    tbody.html("");

    // Use arrow operator as an elegant shortcut to 
    // defining an anonymous function as a parameter
    // to a calling function.
    displayData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// Add a procedure to execute on the filter button's
// click event: grab the input date from the filter form
// and filter the data for only matching datetimes.
d3.select("#filter-btn")
    .on("click", () => {
        // Prevent the page from refreshing
        d3.event.preventDefault();
        
        // todo add filtering code here
        dateinput = d3.select("#datetime");

        // Get the value property of the input element
        var datevalue = dateinput.property("value");

        // filter data to match input value
        var filteredData = data;
        
        // only filter if a date value is provided
        if (datevalue) {

            // the single line arrow operator is even more concise as it just uses
            // a parameter on the left side and a result expression on the right; no
            // parentheses (unless there are multiple parameters), curly braces, or
            // the return keyword needed.
            filteredData = filteredData.filter(sighting => sighting.datetime === datevalue);
        }

        // display the resulting filtered data
        display(filteredData);
    });

// Initial display: all data
display(tableData);

