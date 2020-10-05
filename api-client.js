console.log("beginning API");

const API_KEY = "3a0961cf1af10d7156356ad7e087cd18";

const getData = async () => {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  try {
    const res = await fetch(apiUrl, { method: "GET" });
    const data = await res.json();
    console.log("the getData: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

console.log("The End API");
