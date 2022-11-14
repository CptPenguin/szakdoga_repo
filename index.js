// Import stylesheets
import './style.css';
import data from './JSONlog-0-7-A0.json';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
readJson();

function readJson() {
  fetch(data)
    .then((response) => response.json)
    .then((json) => console.log(json));
}
