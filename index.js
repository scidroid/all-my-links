const container = document.querySelector(".blog");

const addElement = (title, url) => {
  container.insertAdjacentHTML(
    "beforeend",
    `<a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>`
  );
};

fetch("https://dev.to/api/articles?username=scidroid")
  .then(resp => resp.json())
  .then((resp) => {
    for (let index = 0; index < resp.length; index++) {
      addElement(resp[index].title, resp[index].url);
    }
  });
