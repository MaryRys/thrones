import {printToDom} from '../helpers/util.js';

const characters = [{
    id: 'character 1', 
    name: 'Daenerys Targaryen', 
    house: 'Targaryen', 
    imgURL: 'https://vignette.wikia.nocookie.net/gameofthrones/images/5/5f/Daenerys_Dragonpit.jpg/revision/latest?cb=20171015095128'
    },
    {
    id: 'character 2',
    name: 'Jon Snow',
    house: 'Stark',
    imgURL: 'https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553'
    },
    {
    id: 'character 3',
    name: 'Cersei Lannister',
    house: 'Lannister',
    imgURL: 'https://vignette.wikia.nocookie.net/gameofthrones/images/c/c3/Profile-CerseiLannister.png/revision/latest?cb=20170828071355'
    },
    {
    id: 'character 4',
    name: 'Samwell Tarly',
    house: 'Tarly',
    imgURL: 'https://vignette.wikia.nocookie.net/gameofthrones/images/e/e9/Sam_at_Winterfell.jpg/revision/latest?cb=20170903200558'
}
];

const charactersBuiler = () => {
    let domString = '';
        characters.forEach((character) => {
        domString += `<div class="col-2 character">`;
        domString += `<div class="card">`;
        domString += `<img class="card-img-top" src="${character.imgURL}" alt="${character.name}">`;
        domString += `<div class="card-body">`;
        domString += `<h5 class="card-title">${character.name}</h5>`;
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
    });
    printToDom(domString);
};

export {charactersBuiler};