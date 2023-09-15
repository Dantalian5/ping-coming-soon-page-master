let formInput = document.getElementById("emailInput");
let formSubmit = document.getElementById("submitButton");

formSubmit.addEventListener("click", (event) => {
	if (!formInput.validity.valid) {
		formInput.classList.add("js-error");
	} else {
		formInput.classList.remove("js-error");
	}
});
