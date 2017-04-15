
var url = "http://localhost:8080"


$(document).on("click", "#addResBtn", function() {

			getReservation();


});

function getReservation () {
	
	var name = $("#nameInput").val().trim();
	var phone = $("#numInput").val().trim();
	var email = $("#mailInput").val().trim();
	var id = $("#idInput").val().trim();
	var postUrl = url + "/reservation?name=" + name + "&phone=" + phone + "&email=" + email + "&id=" + id;
	console.log(postUrl);
	$.ajax({
            type: "POST",
            url: postUrl,
            timeout: 2000,
            data: { name: name, phone: phone, email: email, id: id },
            success: function(data) {
                //show content
                //console.log(JSON.stringify(data));
                response = true;
                $('.response').css('display', 'block');
                $('.response').html("<h3 class='text-center'>Success: Card Created!</h3>");
            },
            error: function(jqXHR, textStatus, err) {
                //show error message
                console.log('text status '+textStatus+', err '+err);
                if (err === "timeout") {
                	console.log("waiting for server...");
                	postItem(type, front, back);
                }
                response = true;
                $('.response').css('display', 'block');
                $('.response').html("<h3 class='text-center'>Status: " + textStatus + ", Error: "+ err + "<br> Please contact System Admin.</h3>");
            }
        });
}


