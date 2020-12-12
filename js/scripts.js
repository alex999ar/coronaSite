//-------------Carousel-------------//
$(document).ready(function() {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carousel-pause").click(function() {
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function() {
        $("#mycarousel").carousel('cycle');
    });
});

//-------------Accordion-------------//
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


//-------------REAL TIME DATA FOR CARDS IN NEWS-------------//
let total_cases = document.getElementById("total_cases");
let total_death = document.getElementById("total_death");
let total_recovered = document.getElementById("total_recovered");
//Fetching the World Data
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "f93ff5e3afmsh1c47b09be99cc61p1ca087jsnbd673fdc9881"
    }
}).then(response => response.json().then( data => {
    console.log(data);
    total_cases.innerHTML = data.total_cases;
    total_death.innerHTML = data.total_deaths;
    total_recovered.innerHTML = data.total_recovered;

})).catch(err => {
    console.log(err);
});
