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

    let dvdRow = $("<tr>");
    let title = $("<td>").text(DigitalMovie.dvdTitle);
    let link = $("<td>").text(DigitalMovie.dvdLink);
    dvdRow.append(title, link);
    $("#your-dvds").append(dvdRow);

    $("#dvd-title").val("");
    $("#dvd-body").val("");
    $("#new-dvd").hide();
  });
});
