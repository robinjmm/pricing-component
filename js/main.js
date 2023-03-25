import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import "../scss/styles.scss";

window.addEventListener("DOMContentLoaded", () => {
	const toggleButton = document.querySelector(".toggle__button");
	const monthlyValue = document.querySelectorAll(".card__value--month");
	const yearlyValue = document.querySelectorAll(".card__value--year");

	toggleButton.addEventListener("keyup", (event) => {
		if (event.key === "Enter") {
			event.target.click();
		}
	});

	toggleButton.addEventListener("change", (event) => {
		if (event.target.checked) {
			monthlyValue.forEach((value) => {
				value.style.display = "block";
			});

			yearlyValue.forEach((value) => {
				value.style.display = "none";
			});
		} else {
			monthlyValue.forEach((value) => {
				value.style.display = "none";
			});

			yearlyValue.forEach((value) => {
				value.style.display = "block";
			});
		}
	});
});
