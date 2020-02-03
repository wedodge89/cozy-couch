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

    console.log(data);
    let row = $("<tr>");
    let title = $("<td>").text(Game.gameTitle);
    let link = $("<td>").text(Game.gameLink);
    row.append(title, link);
    $("#your-games").append(row);

    $("#game-title").val("");
    $("#game-body").val("");
  });
});
