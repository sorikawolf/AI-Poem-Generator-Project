function displayPoem(response) {
  new Typewriter("#poem", {
    strings: [`${response.data.answer}`],
    autoStart: true,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let apiKey = "357affaact442eeoc3f4199173062fb9";
  let poemSubject = document.querySelector("#poem-prompt");
  let prompt = poemSubject.value.trim();
  let context =
    " Please generate a unique and creative haiku poem based on the prompt or keyword provided by the user. The poem should be formatted in traditional Haiku formatting with 5 syllables on the first line, 7 syllables on the second line, and 5 syllables on the third line. Please add a page break after the 5th, and 12th syllables. The tone should be playful and humorous, and the poem should be easy to understand and enjoyable to read. Please avoid using complex language or abstract concepts. The poem should be suitable for a general audience and should not contain any offensive or inappropriate content. Thank you!";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);

  new Typewriter("#poem", {
    strings: ["Generating poem..."],
    autoStart: true,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
