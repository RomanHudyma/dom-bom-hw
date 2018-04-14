var form = document.createElement('form');
var inputAge = document.createElement('input');
var inputUsername = document.createElement('input');
var inputDate = document.createElement('input');
var inputSubmit = document.createElement('input');

form.name = "login";
form.action = "google.com";

inputAge.name = "age";
inputAge.type = "text";
inputAge.placeholder = "Age";

inputUsername.type = "text";
inputUsername.name = "username";
inputUsername.placeholder = "Username";

inputDate.type = "text";
inputDate.name = "date";
inputDate.placeholder = "Date dd/mm/yyyy";
inputDate.value = moment().format('L');

inputSubmit.value = "Validate Me";
inputSubmit.type = "submit"; 

document.body.insertAdjacentElement('beforeend', form);


form.insertAdjacentElement('beforeend', inputAge);
form.insertAdjacentElement('beforeend', inputUsername);
form.insertAdjacentElement('beforeend', inputDate);
form.insertAdjacentElement('beforeend', inputSubmit);

var inputs = document.getElementsByTagName("input");
for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.display = "block";
    inputs[i].style.marginBottom = "10px";
}

inputSubmit.addEventListener("click", validate);

function validate(event) {
	event.preventDefault();
	var regExpDate = /\d{2}\/\d{2}\/\d{4}/; 

	if ( isNaN(inputAge.value) ||
		parseInt(inputAge.value) < 0 ||
		inputAge.value.includes(" ") ||
		inputAge.value.includes("e") ||
		inputUsername.value.indexOf("user_") != 0 ||
		!regExpDate.test(inputDate.value) ) {
			alert("Your input is not valid!");
			return false;
	} else {
		alert ("OK!");
		return true;
	}
}