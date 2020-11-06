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

document
  .getElementById("getToDolist")
  .addEventListener("click", getArrayJsonbox);

//inputfield
const inputField = document.getElementById("addToDoList");
const submitButton = document.getElementById("submitButton");

const getButtonClick = submitButton.addEventListener("click", () => {
  const value = inputField.value;
  postArrayJsonbox({ description: value, done: false });
  inputField.value = "";
});

// showData();
const createListitem = (item, list) => {
  const listItem = document.createElement("li");
  listItem.className = "ToDoItem";
  listItem.appendChild(document.createTextNode(`${item.description} `));
  list.appendChild(listItem);
  addIconToListitem(item, listItem);
};

const addIconToListitem = (item, listItem) => {
  const listIcon = document.createElement("i");
  listIcon.id = item._id;
  listIcon.className = "far fa-trash-alt deleteButton";
  listIcon.addEventListener("click", () => {
    deleteJsonbox(listIcon.id);
  });
  listItem.appendChild(listIcon);
};

const addToDoListToDom = (result) => {
  emptyResultList();
  result.forEach((item) => {
    const list = document.getElementById("result-list");
    createListitem(item, list);
  });
};
