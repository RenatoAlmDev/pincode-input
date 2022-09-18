const inputs = document.querySelectorAll(".pin-field input");

inputs.forEach((input, index) => {
  input.dataset.index = index;
  input.addEventListener("paste", handleOnPastePin);
  input.addEventListener("keyup", handlePin);
});

function handleOnPastePin(e) {
  const data = e.clipboardData.getData("text");
  const value = data.split("");
  if (value.length === inputs.length) {
    inputs.forEach((input, index) => (input.value = value[index]));
    submit();
  }
}

function handlePin(e) {
  const input = e.target;
  let value = input.value;
  input.value = "";
  input.value = value ? value[0] : "";

  let fieldIndex = input.dataset.index;
  if (value.length > 0 && fieldIndex < inputs.length - 1) {
    input.nextElementSibling.focus();
  }

  if (e.key === "Backspace" && fieldIndex > 0) {
    input.previousElementSibling.focus();
  }

  if (fieldIndex == inputs.length - 1) {
    submit();
  }
}

function submit() {
  console.log("Submitting ...");
  let pin = "";
  inputs.forEach((input) => {
    pin += input.value;
    input.disabled = true / input.classList.add("disabled");
  });
  console.log(pin);
  // call api here
}
