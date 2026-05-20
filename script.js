const bookingForm = document.querySelector("#booking-form");
const formNote = document.querySelector("#form-note");

if (bookingForm && formNote) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(bookingForm);
    const name = formData.get("name") || "Готово";

    bookingForm.classList.add("is-sent");
    formNote.textContent = `${name}, заявка подготовлена. Администратор свяжется с вами для подтверждения.`;
  });
}
