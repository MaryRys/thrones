import { printToDom } from "../helpers/util.js";

const detailsBuilder = (character) => {
    console.log('character inside details', character);
    let domString = '';
    domString += `<div class="col-6 offset-md-3">`;
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

export {detailsBuilder};