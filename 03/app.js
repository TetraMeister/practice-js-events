const buttonList = document.querySelectorAll("button");

buttonList.forEach(function (e) {
  e.addEventListener("click", clicked)
});

function clicked(ev) {
  const message = "clicked!"

  ev.target.innerText = message;

  console.log(message)

  ev.target.removeEventListener("click", clicked)
};