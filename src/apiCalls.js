const API_KEY = process.env.VUE_APP_API_KEY;

export const getImageOfTheDay = async () => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response);
      } else {
        return response.json();
      }
    })
    .catch(error => Error("Error fetching images for that day"));
};

export const getImageOfTheMonth = async month => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${month}`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response);
      } else {
        return response.json();
      }
    })
    .catch(error => Error("Error fetching images for that month"));
};
