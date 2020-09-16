console.log("colorgame");

const dropdownRemove = function () {
  const dropdownRemoval = document.getElementById("dropdown-content");
  dropdownRemoval.addEventListener("click", function () {
    dropdownRemoval.classList.remove("remove"); //verwijdert de class remove waardoor de css hover niet meer geldig is en het menu weer naar rechts schuift
    setTimeout(() => {
      dropdownRemoval.classList.add("remove"); 
    }, 300);// plaats aan het einde van de transition de class remove weer terug waardoor de hover weer werkt
  });
};

//coloring
//white

const addWhite = function () {
  const bodyElement = document.body;
  bodyElement.classList = "white-background";
};

const attachWhite = function () {
  const makeWhite = document.getElementById("white");
  makeWhite.addEventListener("click", function () {
    addWhite();
  });
};

//red

const addRed = function () {
  const bodyElement = document.body;
  bodyElement.classList = "red-background";
};

const attachRed = function () {
  const makeRed = document.getElementById("red");
  makeRed.addEventListener("click", function () {
    addRed();
  });
};

//orange
const addOrange = function () {
  const bodyElement = document.body;
  bodyElement.classList = "orange-background";
};

const attachOrange = function () {
  const makeOrange = document.getElementById("orange");
  makeOrange.addEventListener("click", function () {
    addOrange();
  });
};

//yellow
const addYellow = function () {
  const bodyElement = document.body;
  bodyElement.classList = "yellow-background";
};

const attachYellow = function () {
  const makeYellow = document.getElementById("yellow");
  makeYellow.addEventListener("click", function () {
    addYellow();
  });
};

//green
const addGreen = function () {
  const bodyElement = document.body;
  bodyElement.classList = "green-background";
};

const attachGreen = function () {
  const makeGreen = document.getElementById("green");
  makeGreen.addEventListener("click", function () {
    addGreen();
  });
};

//blue
const addBlue = function () {
  const bodyElement = document.body;
  bodyElement.classList = "blue-background";
};

const attachBlue = function () {
  const makeBlue = document.getElementById("blue");
  makeBlue.addEventListener("click", function () {
    addBlue();
  });
};

//purple
const addPurple = function () {
  const bodyElement = document.body;
  bodyElement.classList = "purple-background";
};

const attachPurple = function () {
  const makePurple = document.getElementById("purple");
  makePurple.addEventListener("click", function () {
    addPurple();
  });
};

// function calls

dropdownRemove();
attachWhite();
attachRed();
attachOrange();
attachYellow();
attachGreen();
attachBlue();
attachPurple();
