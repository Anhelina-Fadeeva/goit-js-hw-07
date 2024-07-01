const form = document.querySelector(`form.login-form`);
// console.dir(form);

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let inputEmail = form.elements.email.value.trim();
  let inputPassword = form.elements.password.value.trim();

  if (inputEmail === "" || inputPassword === "") {
    alert("All form fields must be filled in");
    return;
  }

  let formObj = {
    email: inputEmail,
    password: inputPassword,
  };

  form.reset();
}