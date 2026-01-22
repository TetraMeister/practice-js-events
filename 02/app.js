const div = document.querySelector('div');

if (div) {
  div.addEventListener("mousemove", function () {
    console.log(`Zarejestrowano ruch kursora na elemencie: ${this.tagName}`)
  });

  div.addEventListener("mouseleave", function () {
    console.log(`Zarejestrowano opuszczenie kursora z elementu: ${this.tagName}`)
  });
};
