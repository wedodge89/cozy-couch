//Allows for the Hamburger button to be visible on lower screen resolutions
$(document).ready(function() {
  $(".sidenav").sidenav();
  $(".modal").modal();
});

$(".rug").click(function() {
  $(".background-wall").css({
    transition: "background 1s ease",
    background: "lightblue"
  });
  $("body").css({
    transition: "background 1.4s ease",
    background: "#de5164"
  });
});
