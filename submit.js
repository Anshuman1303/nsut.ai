const form = document.getElementById("subscribeForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  console.log(email);
  form.reset();
});
