const movieURL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=65b79aa63142a13b2908babd124478e8&language=en-US&page=1";
function createMovieRow1() {
  const movieRow1 = $("<tr>");
  const header1 = $("<td>").text("Movie Title: ");
  const header2 = $("<td>").text("Movie popularity: ");
  const header3 = $("<td>").text("Movie Year: ");
  const header4 = $("<td>").text("Movie Description: ");
  movieRow1.append(header1, header2, header3, header4);
  $("#global-dvds").append(movieRow1);
}
function createMovieRow(response) {
  const movieRow = $("<tr>");
  const titleTd = $("<td>").text(JSON.stringify(response.title));
  const popularityTd = $("<td>").text(response.popularity);
  const yearTd = $("<td>").text(response.release_date);
  const overviewTd = $("<td>").text(JSON.stringify(response.overview));
  movieRow.append(titleTd, popularityTd, yearTd, overviewTd);
  $("#global-dvds").append(movieRow);
}
$(".dvd-trigger").on("click", function(event) {
  $("#global-dvds").empty();
  event.preventDefault();
  fetch(movieURL)
    .then(res => res.json())
    .then(data => {
      console.log("DATA: ", data);
      createMovieRow1();
      for (let i = 0; i < data.results.length; i++) {
        if ($("#global-dvds").val() === "" || $("#your-dvds").val() === "") {
          createMovieRow(data.results[i]);
        }
      }
    })
    .catch(error => {
      console.log("ERROR: ", error);
    });
});
