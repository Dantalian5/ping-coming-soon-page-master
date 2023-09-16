const formInput = document.getElementById("emailInput");
const formSubmit = document.getElementById("submitButton");
const form = document.getElementById("myForm");
let formError = document.getElementById("formError");

formSubmit.addEventListener("click", (event) => {
	if (!formInput.validity.valid) {
		form.classList.add("js-error");
		if (formInput.value == "") {
			formError.innerText =
				"Whoops! It looks like you forgot to add your email";
		} else {
			formError.innerText = "Please provide a valid email address";
		}
	} else {
		form.classList.remove("js-error");
	}
});
