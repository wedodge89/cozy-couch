//Allows for the Hamburger button to be visible on lower screen resolutions
$(document).ready(function() {
  $(".sidenav").sidenav();
  $(".modal").modal();
});

//Console Logs if the button has been pressed
//Runs Invert Colors
$("#invert-colors").click(function() {
  console.log(document.getElementById("invert-colors").checked);
  if (document.getElementById("invert-colors").checked !== true) {
    $("#background-wall").css({
      transition: "background 1s ease",
      background: "lightblue"
    });
    $(".carpet").css({
      transition: "background 1.4s ease",
      background: "#de5164"
    });
    $(".iwantthiscolor").css({
      transition: "background 1.4s ease",
      background: "#de5164"
    });
  } else if (document.getElementById("invert-colors").checked === true) {
    $("#background-wall").css({
      transition: "background 1s ease",
      background: "#de5164"
    });
    $(".carpet").css({
      transition: "background 1.4s ease",
      background: "lightblue"
    });
    $(".iwantthiscolor").css({
      transition: "background 1.4s ease",
      background: "lightblue"
    });
  }
});
