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
  const listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(joke));
  const list = document.getElementById("result-list");
  list.appendChild(listItem);
};

const addImgJokeToDom = (url => {
  const listItem = document.createElement(url); //ik verwacht een complete url + img tags terug zoals : <img src="https://icanhazdadjoke.com/j/R7UfaahVfFd.png" />
  // listItem.appendChild(document.createTextNode(`hallo`));
  // listItem.appendChild(url);
  // const listImg = document.createElement("IMG");
  // listImg.src = url;
  const list = document.getElementById("result-list");
  list.appendChild(listItem);
  // listItem.appendChild(listImg);
};

// //'reservecode'
// const addImgJokeToDom = (url) => {
//   const listItem = document.createElement("li");
//   listItem.appendChild(document.createTextNode(`hallo`));
//   const listImg = document.createElement("IMG");
//   listImg.src = url;
//   const list = document.getElementById("result-list");
//   list.appendChild(listItem);
//   listItem.appendChild(listImg);
// };
