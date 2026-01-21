const divList = document.querySelectorAll('div');
const body = document.querySelector("body");

divList.forEach(function (e) {
  const timeout = Number(e.dataset.time);

  e.addEventListener("click", function () {
    setTimeout(() => {
      this.classList.add("clicked");
    }, timeout);
  });
});

body.addEventListener("click", function (ev) {
  if (ev.currentTarget === ev.target) {
    divList.forEach(function (e) {
      e.classList.remove("clicked")
    });
  };
});