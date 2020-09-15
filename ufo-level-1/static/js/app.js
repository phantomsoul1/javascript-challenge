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

        var tableData = data;
        var filteredData = tableData.filter((sighting) => {
            console.log(sighting.date);            
            return sighting.date == datevalue;
        });

        display(filteredData);
    });

display(tableData);

