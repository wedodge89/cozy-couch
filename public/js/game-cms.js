$("#game-cms").on("submit", function(event) {
  event.preventDefault();

  var Game = {
    gameTitle: $("#game-title")
      .val()
      .trim(),
    gameLink: $("#game-body")
      .val()
      .trim()
  };

  $.post("/api/games", Game).then(function(data) {
    console.log(data);
    $("#game-title").val("");
    $("#game-body").val("");
  });
});
