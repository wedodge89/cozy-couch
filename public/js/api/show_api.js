const tvURL =
  "https://api.themoviedb.org/3/tv/top_rated?api_key=65b79aa63142a13b2908babd124478e8&language=en-US&page=1";
function createShowRow1() {
  const movieRow1 = $("<tr>");
  const header1 = $("<td>").text("Title: ");
  const header2 = $("<td>").text("Popularity: ");
  const header3 = $("<td>").text("Air Date: ");
  const header4 = $("<td>").text("Overview: ");
  movieRow1.append(header1, header2, header3, header4);
  $("#global-shows").append(movieRow1);
}
function createShowRow(data) {
  let tRow = $("<tr>");
  let titleTd = $("<td>").text(JSON.stringify(data.name));
  let popularityTd = $("<bold><td>").text(data.popularity);
  let yearTd = $("<td>").text(data.first_air_date);
  let overviewTd = $("<td>").text(JSON.stringify(data.overview));
  tRow.append(titleTd, popularityTd, yearTd, overviewTd);
  $("#global-shows").append(tRow);
}
$(".tv-trigger").on("click", function(event) {
  $("#global-shows").empty();
  event.preventDefault();
  fetch(tvURL)
    .then(res => res.json())
    .then(data => {
      // console.log("DATA: ", data);
      createShowRow1();
      for (let i = 10; i < data.results.length; i++) {
        if ($("#global-shows").val() === "" || $("#your-shows").val() === "") {
          createShowRow(data.results[i]);
        }
      }
    })
    .catch(error => {
      console.log("ERROR: ", error);
    });
});
