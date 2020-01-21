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
    console.log(data);

    let bookRow = $("<tr>");
    let title = $("<td>").text(Book.bookTitle);
    let link = $("<td>").text(Book.bookLink);
    bookRow.append(title, link);
    $("#your-books").append(bookRow);
    $("#new-book").hide();
  });
});
