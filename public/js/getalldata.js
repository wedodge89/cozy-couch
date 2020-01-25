$.get("/api/books", function(data) {
  for (let i = 0; i < data.length; i++) {
    let bookRow = $("<tr>");
    let title = $("<td>").text(data[i].bookTitle);
    let link = $("<td>").text(data[i].bookLink);
    bookRow.append(title, link);
    $("#your-books").append(bookRow);
  }
});

$.get("/api/games", function(data) {
  for (let i = 0; i < data.length; i++) {
    let row = $("<tr>");
    let title = $("<td>").text(data[i].gameTitle);
    let link = $("<td>").text(data[i].gameLink);
    row.append(title, link);
    $("#your-games").append(row);
  }
});

$.get("/api/tvshows", function(data) {
  for (let i = 0; i < data.length; i++) {
    let row = $("<tr>");
    let title = $("<td>").text(data[i].tvTitle);
    let link = $("<td>").text(data[i].tvLink);
    row.append(title, link);
    $("#your-shows").append(row);
  }
});
$.get("/api/dvds", function(data) {
  for (let i = 0; i < data.length; i++) {
    let row = $("<tr>");
    let title = $("<td>").text(data[i].dvdTitle);
    let link = $("<td>").text(data[i].dvdLink);
    row.append(title, link);
    $("#your-dvds").append(row);
  }
});
