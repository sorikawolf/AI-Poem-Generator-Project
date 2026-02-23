function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["Generating poem..."],
    autoStart: true,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
