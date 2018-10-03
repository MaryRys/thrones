import { printToDom } from "../helpers/util.js";
import {charactersBuilder} from "./characters.js";

const closeButtonEvent = () => {
    const closeButton = document.getElementById('close');
    closeButton.addEventListener('click', )
};

const detailsBuilder = (character) => {
    console.log('character inside details', character);
    let domString = '';
    domString += `<div class="col-6 offset-md-3">`;
    domString += `<div class="row">`;
    domString += `<button class="btn btn-danger">x</button>`;
    domString += `</div>`;
    domString += `<div class="row">`;
    domString += `<div class="col">`;
    domString += `<img src="${character.imgURL}" alt="${character.name}">`;
    domString += `</div>`;
    domString += `<div class="col">`;
    domString += `<h1>${character.name}`;
    domString += `<h3>${character.house}`;
    domString += `</div>`;
    domString += `</div>`;

    printToDom(domString);
};
closeButtonEvent();
export {detailsBuilder};