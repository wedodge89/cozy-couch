const animeURL = "https://api.jikan.moe/v3/top/anime/1/bypopularity";
function createAnimeRow1() {
  const trow = $("<tr>");
  const header1 = $("<td>").text("Anime ranks: ");
  const header2 = $("<td>").text("Anime Titles: ");
  const header3 = $("<td>").text("Start-Date: ");
  const header4 = $("<td>").text("End-Date: ");
  const header5 = $("<td>").text("Episodes: ");
  trow.append(header2, header1, header3, header4, header5);
  $("#global-games").append(trow);
}
function createAnimeRow(response) {
  const animeRow = $("<tr>");
  const titleTd = $("<td>").text(JSON.stringify(response.title));
  const rankTd = $("<td>").text(response.rank);
  const dateTd = $("<td>").text(response.start_date);
  const endTd = $("<td>").text(response.end_date);
  const episodesTd = $("<td>").text(response.episodes);
  animeRow.append(titleTd, rankTd, dateTd, endTd, episodesTd);
  $("#global-games").append(animeRow);
}
$(".game-trigger").on("click", function(event) {
  $("#global-games").empty();
  event.preventDefault();
  fetch(animeURL)
    .then(res => res.json())
    .then(data => {
      console.log("DATA: ", data);
      createAnimeRow1();
      for (let i = 0; i < data.top.length; i++) {
        if ($("#global-games").val() === "" || $("#your-games").val() === "") {
          createAnimeRow(data.top[i]);
          //   createRow2(data.results[i]);
        }
      }
    })
    .catch(error => {
      console.log("ERROR: ", error);
    });
});
