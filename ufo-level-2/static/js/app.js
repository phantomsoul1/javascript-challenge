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

function displayOptions(tag, options) {
    tag.html("");
    tag.append("option").attr("disabled selected");
    options.forEach((option) => {
        tag.append("option").attr("value", option).text(option);
    });
}

// produces an array containing unique elements within a provided
// array. This is used to create the selection content for filtering
function unique(array) {
    return array.filter((item, i, ar) => ar.indexOf(item) === i)
                .sort();
}

// Add a procedure to execute on the filter button's
// click event: grab the input date from the filter form
// and filter the data for only matching datetimes.
d3.select("#filter-btn")
    .on("click", () => {
        // Prevent the page from refreshing
        d3.event.preventDefault();
        
        // todo add filtering code here
        var statesel = d3.select("#state");
        var countrysel = d3.select("#country");
        var shapesel = d3.select("#shape");

        var dateinput = d3.select("#datetime");
        var cityinput = d3.select("#city");

        console.log(statesel.node().value);

        // Get the value property of the input element
        var datevalue = dateinput.property("value");
        var cityvalue = cityinput.property("value");
        var statevalue = statesel.node().value;
        var countryvalue = countrysel.node().value;
        var shapevalue = shapesel.node().value;

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

        if (cityvalue) {
            filteredData = filteredData.filter(sighting => sighting.city === cityvalue.toLowerCase());
        }

        if (statevalue != "") {
            filteredData = filteredData.filter(sighting => sighting.state === statevalue);
        }

        if (countryvalue != "") {
            filteredData = filteredData.filter(sighting => sighting.country === countryvalue);
        }

        if (shapevalue != "") {
            filteredData = filteredData.filter(sighting => sighting.shape === shapevalue);
        }

        // display the resulting filtered data
        display(filteredData);
    });

shapes = unique(tableData.map(d => d.shape));

shapetag = d3.select("#shape");
shapetag.html("");
shapetag.append("option").attr("disabled selected");
shapes.forEach((shape) => {
    shapetag.append("option").attr("value", shape).text(shape);
});

// Initial display: all data
displayOptions(d3.select("#state"), unique(tableData.map(d => d.state)));
displayOptions(d3.select("#country"), unique(tableData.map(d => d.country)));
displayOptions(d3.select("#shape"), unique(tableData.map(d => d.shape)));
display(tableData);





