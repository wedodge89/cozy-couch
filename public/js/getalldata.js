$(document).ready(function() {
  $.get("/api/books", function(data) {
    for (var i = 0; i < data.length; i++) {
      var bookListingTD1 = $("<td>" + data[i].bookTitle + "</td>");
      var bookListingTD2 = $("<td>" + data[i].bookLink + "</td>");
      $("#user-books" + 1).append(bookListingTD1, bookListingTD2);
    }
  });
});
