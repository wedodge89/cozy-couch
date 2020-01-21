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
    let gameRow = $("<tr>");
    let title = $("<td>").text(Game.gameTitle);
    let link = $("<td>").text(Game.gameLink);
    gameRow.append(title, link);
    $("#your-games").append(gameRow);
    $("#game-title").val("");
    $("#game-body").val("");
    $("#new-game").hide();
  });
});
