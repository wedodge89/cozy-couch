$("#book-cms").on("submit", function(event) {
  event.preventDefault();

  var Book = {
    bookTitle: $("#book-title")
      .val()
      .trim(),
    bookLink: $("#book-body")
      .val()
      .trim()
  };
  $.post("/api/books", Book).then(function(data) {
    $("#book-title").val("");
    $("#book-body").val("");
    $.get("/api/books", function(data) {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        let bookRow = $("<tr>");
        let title = $("<td>").text(data[i].bookTitle);
        let link = $("<td>").text(data[i].bookLink);
        bookRow.append(title, link);
        $("#your-books").append(bookRow);
      }
    });
  });
});
