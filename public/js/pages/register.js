$("#regButton").on("click", function(event) {
    event.preventDefault();
    let firstName = $("#firstName").val().trim();
    let lastName = $("#lastName").val().trim();
    let email = $("#email").val().trim();
    let newPassword = $("#newPassword").val().trim();
    let confirmPassword = $("#confirmPassword").val().trim();
    if (newPassword !== confirmPassword) {
        alert("Your passwords must match.")
    } else {
        $("#firstName").val("");
        $("#lastName").val("");
        $("#email").val("");
        $("#newPassword").val("");
        $("#confirmPassword").val("");
    };
});