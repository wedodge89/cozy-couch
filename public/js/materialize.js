//Allows for the Hamburger button to be visible on lower screen resolutions
$(document).ready(function() {
  $(".sidenav").sidenav();
  $(".modal").modal();
});

$("#rug").click(function() {
  $("#body:after").css({
    background: "",
    color: "white",
    "font-size": "44px"
  });
});
