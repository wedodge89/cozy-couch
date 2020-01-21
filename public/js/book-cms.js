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
    console.log(data);
    $("#book-title").val("");
    $("#book-body").val("");
  });
});
