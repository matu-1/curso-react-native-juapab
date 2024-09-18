const apiKey="0a90b99288d656b314d89f8c47729eaa";

export const getClima = ({ ciudad, pais }) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}&units=metric`;
  return fetch(url).then( res => res.json());
}