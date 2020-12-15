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
//-------------About us-------------//
$(document).ready(function () {
  $('.navbar-light .dmenu').hover(function () {
          $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
      }, function () {
          $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
      });
  });