const submitForm = () => {
  const values = {
    "email": document.querySelector("input[name='email']").value,
    "location": document.querySelector("input[name='location']").value,
  };
  return firebase.database().ref("signups").push(values).then(a => {
    const form = document.querySelector(".form");
    form.classList.add("submitted");
  });
}
