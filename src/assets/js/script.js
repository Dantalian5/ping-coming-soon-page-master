const formInput = document.getElementById("emailInput");
const formSubmit = document.getElementById("submitButton");
const form = document.getElementById("myForm");

formSubmit.addEventListener("click", (event) => {
	if (!formInput.validity.valid) {
		form.classList.add("js-error");
	} else {
		form.classList.remove("js-error");
	}
});
