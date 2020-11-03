console.log("beginning API");

//tekst joke

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append(
  "Cookie",
  "__cfduid=dcabffc78b05d2d31ebdeecd6642c28f01604056242"
);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const getTextJoke = async () => {
  fetch("https://icanhazdadjoke.com/", requestOptions)
    .then((response) => response.json())
    .then((result) => addTekstJokeToDom(result.joke))
    .catch((error) => console.log("error", error));
};

//image joke

const myHeadersImg = new Headers();
myHeadersImg.append(
  "Cookie",
  "__cfduid=dcabffc78b05d2d31ebdeecd6642c28f01604056242"
);

const requestOptionsImg = {
  method: "GET",
  headers: myHeadersImg,
  redirect: "follow",
  mode: "no-cors",
};

const getImgJoke = async () => {
  fetch("https://icanhazdadjoke.com/j/08xHQCdx5Ed.png", requestOptionsImg)
    .then((response) => response.json())
    .then((result) => addImgJokeToDom(result))
    .catch((error) => console.log("error", error));
};

console.log("The End API");
