// from data.js
var tableData = data;

// YOUR CODE HERE!
tbody = d3.select("#ufo-table").select("tbody");
console.log(tbody);

tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

