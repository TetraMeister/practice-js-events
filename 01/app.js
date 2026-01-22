const button = document.querySelector('button');

if (button) {
  button.addEventListener("click", sayClicked);
}

function sayClicked() {
  console.log('Button clicked!')
};