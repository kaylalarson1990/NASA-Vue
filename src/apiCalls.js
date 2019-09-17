import { apiKey } from "./apiKey.js";

export const getImageOfTheDay = async () => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
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
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${month}`;
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
