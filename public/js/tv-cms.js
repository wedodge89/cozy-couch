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
    $("#tv-title").val("");
    $("#tv-body").val("");
  });
});
