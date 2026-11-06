const input = document.querySelector('#name-input');

const span = document.querySelector('#name-output');

const updateInput = () => {
  const name = input.value.trim();
  if (name.length > 0) {
    span.textContent = name;
  } else {
    span.textContent = `Anonymous`;
  }
};
input.addEventListener('input', updateInput);
