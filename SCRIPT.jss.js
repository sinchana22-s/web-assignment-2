$(document).ready(function() {
    $("#registrationForm").submit(function(event) {
        event.preventDefault();

        var formData = $(this).serialize();

        $.ajax({
            type: "POST",
            url: "submit.php",
            data: formData,
            success: function(response) {
                $("#responseMessage").html(response).show();
                $("#registrationForm")[0].reset();
            },
            error: function() {
                alert("There was an error submitting the form.");
            }
        });
    });
});