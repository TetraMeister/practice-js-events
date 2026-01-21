const buttonList = document.querySelectorAll("button");

buttonList.forEach(function (e) {
  e.addEventListener("click", clicked)
});

function clicked(ev) {
  // let counter = 0;

  const message = "clicked!"

  ev.target.innerText = message;

  console.log(message)

  // counter++;

  // if (counter > 0) {
  if (ev.target.innerText === "clicked!") {
    ev.target.removeEventListener("click", clicked)
  };
};