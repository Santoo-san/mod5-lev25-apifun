console.log("beginning");

// general
const removeAll = () => {
  const allListItems = document.getElementById("result-list");
  allListItems.querySelectorAll("*").forEach((n) => n.remove());
};

document
  .getElementById("remove-all-button")
  .addEventListener("click", removeAll);

const emptyResultList = () =>
  (document.getElementById("result-list").innerHTML = "");

document.getElementById("getJoke").addEventListener("click", getTextJoke);

document.getElementById("showJoke").addEventListener("click", getImgJoke);

// showData();
const addTekstJokeToDom = (joke) => {
  emptyResultList();
  const listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(joke));
  const list = document.getElementById("result-list");
  list.appendChild(listItem);
};

const addImgJokeToDom = (url) => {
  emptyResultList();
  const listImg = document.createElement("IMG");
  listImg.src = `https://icanhazdadjoke.com/j/${url}.png`;
  const list = document.getElementById("result-list");
  list.appendChild(listImg);
};
