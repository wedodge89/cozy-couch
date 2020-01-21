const booksURL =
  "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=SHUsqzmmkjs5BkVxaILGSqNyMLd6T9e7";
function createBookRow1() {
  const tRow1 = $("<tr>");
  const header1 = $("<td>").text("Author name: ");
  const header2 = $("<td>").text("Book Title name: ");
  const header3 = $("<td>").text("Book Publisher: ");
  const header4 = $("<td>").text("Book description: ");
  tRow1.append(header1, header2, header3, header4);
  $("#global-books").append(tRow1);
}
function createBookRow(response) {
  const tRow2 = $("<tr>");
  const authorTd = $("<td>").text(response.author);
  const titleTd = $("<td>").text(response.title);
  const publisherTd = $("<td>").text(JSON.stringify(response.publisher));
  const descriptionTd = $("<td>").text(JSON.stringify(response.description));
  tRow2.append(authorTd, titleTd, publisherTd, descriptionTd);
  $("#global-books").append(tRow2);
}
$(".book-trigger").on("click", function(event) {
  $("#global-books").empty();
  event.preventDefault();
  fetch(booksURL)
    .then(res => res.json())
    .then(data => {
      // console.log("DATA: ", data);
      createBookRow1();
      for (let i = 10; i < data.results.length; i++) {
        if ($("#global-books").val() === "" || $("#your-books").val() === "") {
          createBookRow(data.results[i]);
        }
      }
    })
    .catch(error => {
      console.log("ERROR: ", error);
    });
});
