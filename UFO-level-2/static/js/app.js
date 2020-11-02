// from data.js
var tableData = data;

// YOUR CODE HERE!
var filterButton=d3.select("#filter-btn");

filterButton.on("click",function(){
    var dateInput=document.getElementById("datetime").value;
    var cityInput=document.getElementById("city").value;
    var stateInput=document.getElementById("state").value;
    var countryInput=document.getElementById("country").value;
    var shapeInput=document.getElementById("shape").value;
    
    var dataFiltered=tableData.filter(record => (record.datetime == dateInput || dateInput == "") && (record.city == cityInput || cityInput == "")
    && (record.state == stateInput || stateInput == "") && (record.country == countryInput || countryInput == "") && (record.shape == shapeInput ||
    shapeInput==""));
    console.log(dataFiltered);

    var tbody=d3.select("tbody");
    tbody.html("");       
    dataFiltered.forEach(element => {
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
