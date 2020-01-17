//Allows for the Hamburger button to be visible on lower screen resolutions
$(document).ready(function() {
  $(".sidenav").sidenav();
  $(".modal").modal();
});

function invert() {
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
}

function unInvert() {
  $(".rug").click(function() {
    $(".background-wall").css({
      transition: "background 1s ease",
      background: "#de5164"
    });
    $("body").css({
      transition: "background 1.4s ease",
      background: "lightblue"
    });
  });
}

if (document.body.background == "#add8e6") {
  invert();
} else {
  unInvert();
}
