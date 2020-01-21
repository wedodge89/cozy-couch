$("#dvd-cms").on("submit", function(event) {
  event.preventDefault();

  var DigitalMovie = {
    dvdTitle: $("#dvd-title")
      .val()
      .trim(),
    dvdLink: $("#dvd-body")
      .val()
      .trim()
  };

  $.post("/api/dvds", DigitalMovie).then(function(data) {
    console.log(data);
    $("#dvd-title").val("");
    $("#dvd-body").val("");
  });
});
