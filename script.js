const bookingForm = document.querySelector("#booking-form");
const formNote = document.querySelector("#form-note");

if (bookingForm && formNote) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    bookingForm.classList.add("is-sent");
    formNote.textContent = "Готово: в реальном проекте после этого заявка ушла бы администратору.";
  });
}
