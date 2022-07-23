const refs = {
  form: document.querySelector('.login-form')
}
refs.form.addEventListener("submit", onSubmit)

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password }
  } = event.target;
  
  if (email.value === "" || password.value === "") {
    return alert("Please fill all the fields!");
  }

  console.log(`Login: ${email.value}, password: ${password.value}`)
  
  event.currentTarget.reset();
}