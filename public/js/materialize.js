//Allows for the Hamburger button to be visible on lower screen resolutions
$(document).ready(function() {
  $(".sidenav").sidenav();
  $(".modal").modal();
});

//Handles whether or not the light switch has been turned on or off
$("#lights-offon").click(function() {
  if (document.getElementById("lights-offon").checked === false) {
    $("#visible-light").css({
      visibility: "visible"
    });
    $("#background-wall").css({
      background: "#003152"
    });
    $("#carpet").css({
      background: "#ce6774"
    });
    $(".bookshelf").addClass("darken-img");
    $(".dvd").addClass("darken-img");
    $(".rug").addClass("darken-img");
    $("#main-switch").attr("src", "./imgs/onswitch.png");
  } else if (document.getElementById("lights-offon").checked === true) {
    $("#visible-light").css({
      visibility: "hidden"
    });
    $("#background-wall").css({
      background: "lightblue"
    });
    $("#carpet").css({
      background: "#de5164"
    });
    $(".bookshelf").removeClass("darken-img");
    $(".dvd").removeClass("darken-img");
    $(".rug").removeClass("darken-img");
    $("#main-switch").attr("src", "./imgs/offswitch.png");
  }
});
$("#nevergonnagiveyoup").click(function() {
  if (document.getElementById("astley-switch").checked === false) {
    $(".lowfi-beats-to-beat-your-head-with").attr(
      "src",
      "https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0"
    );
  } else if (document.getElementById("nevergonnagiveyoup").checked === true) {
    $(".lowfi-beats-to-beat-your-head-with").attr(
      "src",
      "https://www.youtube.com/embed/hHW1oY26kxQ?&autoplay=1"
    );
  }
});

$("#nevergonnagiveyoup").click(function() {
  console.log(document.getElementById("nevergonnagiveyoup").checked);
});
