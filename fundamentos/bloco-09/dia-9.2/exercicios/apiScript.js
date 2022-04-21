const fetch = require('node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';


const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  return fetch(API_URL, myObject)
  // .then(response => console.log(response));
  .then(response => response.json())
  // .then(data => console.log(data));
  .then(data => document.getElementById('jokeContainer').innerText = data.joke)

}
// Para ver as informações no console, eu comento o window.onload, uso o require e chamo a função.

// fetchJoke();

window.onload = () => fetchJoke();
     
