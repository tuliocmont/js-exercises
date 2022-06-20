const movie = {
  title: "La la land",
  releaseYear: 2017,
  rating: 5,
  director: "Damien Chazelle",
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}
