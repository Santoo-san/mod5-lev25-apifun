//general API settings
const headersJsonbox = new Headers();
headersJsonbox.append(
  "Cookie",
  "__cfduid=d0268583f798bb90d5da418f860219d2f1604486333"
);

const requestOptionsJsonbox = {
  method: "GET",
  headers: headersJsonbox,
  redirect: "follow",
};

const getLimit = "?limit=1000";
const baseUrl = "https://jsonbox.io/box_7dbe7156883cf09b09fe";
const getUrl = `https://jsonbox.io/box_7dbe7156883cf09b09fe${getLimit}`;

//get request
const getArrayJsonbox = async () => {
  fetch(getUrl, requestOptionsJsonbox)
    .then((response) => response.json())
    .then((result) => addToDoListToDom(result))
    .catch((error) => console.log("error", error));
};

//post request
const postArrayJsonbox = async (data) => {
  await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  await getArrayJsonbox().catch((error) => console.log("error", error));
};

//delete request
const deleteJsonbox = async (ID) => {
  await fetch(`${baseUrl}/${ID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  await getArrayJsonbox().catch((error) => console.log("error", error));
};
