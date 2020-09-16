// from data.js
var tableData = data;

// YOUR CODE HERE!


function display(displayData) {
    tbody = d3.select("#ufo-table").select("tbody");
    
    console.log(tbody);

    tbody.html("");
    displayData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
        console.log(tbody)
    });
}

d3.select("#filter-btn")
    .on("click", () => {
        // Prevent the page from refreshing
        d3.event.preventDefault();
        
        // todo add filtering code here
        dateinput = d3.select("#datetime");

        // Get the value property of the input element
        var datevalue = dateinput.property("value");

        console.log(datevalue);
        console.log(data);

        var filteredData = data.filter(sighting => sighting.datetime === datevalue);

        display(filteredData);
    });

display(tableData);

