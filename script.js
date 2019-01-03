const setEmailErrorVisibile = (isVisible) => {
  const emailLabelEl = document.querySelector(".email-label");
  if (isVisible) {
    emailLabelEl.classList.add("error");
  } else {
    emailLabelEl.classList.remove("error");
  }
};

const submitForm = () => {
  const emailInput = document.querySelector("input[name='email']");
  if (!emailInput.checkValidity()) {
    setEmailErrorVisibile(true);
    emailInput.focus();
    return;
  }
  const locationInput = document.querySelector("input[name='location']");
  const values = {
    "email": emailInput.value,
    "location": locationInput.value,
  };
  return firebase.database().ref("signups").push(values).then(a => {
    const form = document.querySelector(".form");
    form.classList.add("submitted");
  });
}

window.onload = () => {
  const emailInput = document.querySelector("input[name='email']");
  emailInput.addEventListener("keypress", () => {
    setEmailErrorVisibile(false);
  });
  emailInput.addEventListener("paste", () => {
    setEmailErrorVisibile(false);
  });
  emailInput.addEventListener("input", () => {
    setEmailErrorVisibile(false);
  });
};
