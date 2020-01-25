$("#tv-cms").on("submit", function(event) {
  event.preventDefault();

  var TelevisionShow = {
    tvTitle: $("#tv-title")
      .val()
      .trim(),
    tvLink: $("#tv-body")
      .val()
      .trim()
  };

  $.post("/api/tvshows", TelevisionShow).then(function(data) {
    console.log(data);

    let tvRow = $("<tr>");
    let title = $("<td>").text(TelevisionShow.tvTitle);
    let link = $("<td>").text(TelevisionShow.tvLink);
    tvRow.append(title, link);
    $("#your-shows").append(tvRow);

    $("#tv-title").val("");
    $("#tv-body").val("");
  });
});
