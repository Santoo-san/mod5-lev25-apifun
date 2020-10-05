console.log("beginning");

const showData = async () => {
const data = await getData()
console.log("show me the data: ", data);
};

showData();

console.log("The End");
