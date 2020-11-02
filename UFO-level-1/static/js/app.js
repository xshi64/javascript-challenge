// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get the date entered by the user.
var inputField=d3.select("#datetime");
var filterButton=d3.select("#filter-btn");
inputField.on("change",function() {
    var dateInput=d3.event.target.value;
    console.log(dateInput);
    var views=tableData.filter(record => record.datetime == dateInput);
    console.log(views);
    
    var tbody=d3.select("tbody");
    tbody.html("");       
    views.forEach(element => {
        var row=tbody.append("tr");
        row.append("td").text(element.datetime);
        row.append("td").text(element.city);
        row.append("td").text(element.state);
        row.append("td").text(element.country);
        row.append("td").text(element.shape);
        row.append("td").text(element.durationMinutes);
        row.append("td").text(element.comments);
    })
})