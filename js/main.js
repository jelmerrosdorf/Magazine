window.addEventListener('load', init);


// JSON

let gameDetails = [
    {
        name: "Super Mario Odyssey",
        image: "./img/smo.jpg",
        genre: "Platform",
        developer: "Nintendo",
        tags: "mario, switch"
    },
    {
        name: "Pokémon Sword",
        image: "./img/pswsh.jpg",
        genre: "RPG",
        developer: "Game Freak",
        tags: "pokémon, switch"
    },
    {
        name: "Pokémon Legends: Arceus",
        image: "./img/pla.jpg",
        genre: "Action-adventure",
        developer: "Nintendo",
        tags: "pokémon, switch"
    },
    {
        name: "The Legend of Zelda: Breath of the Wild",
        image: "./img/botw.jpg",
        genre: "Action-adventure",
        developer: "Nintendo",
        tags: "zelda, link, switch, wii-u"
    },
    {
        name: "Mario Kart 8",
        image: "./img/mk8.jpg",
        genre: "Racing",
        developer: "Nintendo",
        tags: "mario, switch, wii-u"
    },
    {
        name: "God of War",
        image: "./img/gow.jpg",
        genre: "Action-adventure",
        developer: "Santa Monica Studio",
        tags: "kratos, ps4, windows"
    },
    {
        name: "Red Dead Redemption 2",
        image: "./img/rdr2.jpg",
        genre: "Action-adventure",
        developer: "Rockstar Studios",
        tags: "arthur_morgan, ps4, xbox_one, windows"
    },
    {
        name: "Ratchet & Clank: Rift Apart",
        image: "./img/rcra.jpg",
        genre: "Platform",
        developer: "Insomniac Games",
        tags: "ratchet, clank, ps5"
    },
    {
        name: "Overwatch",
        image: "./img/ow.jpg",
        genre: "FPS",
        developer: "Blizzard Entertainment",
        tags: "tracer, windows, ps4, xbox_one, switch"
    },
    {
        name: "Ghost of Tsushima",
        image: "./img/got.jpg",
        genre: "Action-adventure",
        developer: "Sucker Punch Productions",
        tags: "jin, ps4, ps5"
    },
];


// Globals

let allGames;
let detailButton;
let collectButton;
let collectedGames = [];


// Functions

function init()
{
    if (typeof window.localStorage === "undefined") {
        console.error('Local storage is not available in your browser');
        return;
    }

    allGames = document.getElementById('listGames');

    getCollectedGames();
    createGameCards();

    collectButton = document.getElementsByClassName('collectBtn')
    for (let i = 0; i < collectButton.length; i++) {
        collectButton[i].addEventListener('click', function (e) {
            addOrRemoveCollected(i)
        });
    }

    detailButton = document.getElementsByClassName('detailBtn')
    for (let i = 0; i <detailButton.length; i++) {
        detailButton[i].addEventListener('click', function (e) {
            showDetails(i)
        });
    }
}

function showDetails(game)
{
    let nameGame = document.getElementById('nameGame');
    nameGame.innerHTML = gameDetails[game].name;

    let genreGame = document.getElementById('clicked-genre');
    genreGame.innerHTML = gameDetails[game].genre;

    let developerGame = document.getElementById('clicked-developer');
    developerGame.innerHTML = gameDetails[game].developer;

    let tagsGame = document.getElementById('clicked-tags');
    tagsGame.innerHTML = gameDetails[game].tags;
}

function getCollectedGames()
{
    let storedString = localStorage.getItem('myGames');

    if (storedString) {
        let storedData = JSON.parse(storedString);
        for (let game of storedData) {
            collectedGames.push(game);
        }
    }
}

function addOrRemoveCollected(gameId)
{
    let gameName = gameDetails[gameId].name;

    if (collectedGames.includes(gameName)) {
        let position = collectedGames.indexOf(gameName)
        collectedGames.splice(position, 1);
    } else {
        collectedGames.push(gameName);
    }

    localStorage.setItem('myGames', JSON.stringify(collectedGames));

    location.reload();
}

function createGameCards()
{
    for (let games of gameDetails) {

        let game = document.createElement('div');
        game.classList.add('gameCard');

        let name = document.createElement('h2');
        name.innerText = games.name;

        let image = document.createElement('img');
        image.src = games.image;

        let detailButton = document.createElement('p');
        detailButton.classList.add('detailBtn');
        detailButton.innerText = "Show details"

        let collectButton = document.createElement('p');
        collectButton.classList.add('collectBtn');

        let isCollected = collectedGames.includes(games.name);

        if (isCollected) {
            game.classList.add('collected')
            collectButton.innerText = "Remove from collection"
        } else {
            collectButton.innerText = "Add to collection"
        }

        allGames.appendChild(game)
        game.appendChild(name)
        game.appendChild(image)
        game.appendChild(detailButton)
        game.appendChild(collectButton)
    }
}
