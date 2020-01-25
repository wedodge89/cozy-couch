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

    $.get("/api/games", function(data) {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        let row = $("<tr>");
        let title = $("<td>").text(data[i].gameTitle);
        let link = $("<td>").text(data[i].gameLink);
        row.append(title, link);
        $("#your-games").append(row);
      }
    });
    $("#game-title").val("");
    $("#game-body").val("");
  });
});
