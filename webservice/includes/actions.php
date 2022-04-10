<?php
/**
 * @return array
 */
function getGames()
{
    return [
        [
            "id" => 1,
            "name" => "Super Mario Odyssey",
            "genre" => "Platform",
        ],
        [
            "id" => 2,
            "name" => "Pokémon Sword",
            "genre" => "RPG",
        ],
        [
            "id" => 3,
            "name" => "Pokémon Legends: Arceus",
            "genre" => "Action-adventure",
        ],
        [
            "id" => 4,
            "name" => "The Legend of Zelda: Breath of the Wild",
            "genre" => "Action-adventure",
        ],
        [
            "id" => 5,
            "name" => "Mario Kart 8",
            "genre" => "Racing",
        ],
        [
            "id" => 6,
            "name" => "God of War",
            "genre" => "Action-adventure",
        ],
        [
            "id" => 7,
            "name" => "Red Dead Redemption 2",
            "genre" => "Action-adventure",
        ],
        [
            "id" => 8,
            "name" => "Ratchet & Clank: Rift Apart",
            "genre" => "Platform",
        ],
        [
            "id" => 9,
            "name" => "Overwatch",
            "genre" => "FPS",
        ],
        [
            "id" => 10,
            "name" => "Ghost of Tsushima",
            "genre" => "Action-adventure",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getGameDetails($id)
{
    $tags = [
        1 => [
            "developer" => "Nintendo",
            "tags" => ['mario', 'switch']
        ],
        2 => [
            "developer" => "Game Freak",
            "tags" => ['pokémon', 'switch']
        ],
        3 => [
            "developer" => "Game Freak",
            "tags" => ['pokémon', 'switch']
        ],
        4 => [
            "developer" => "Nintendo",
            "tags" => ['zelda', 'link', 'switch', 'wii_u']
        ],
        5 => [
            "developer" => "Nintendo",
            "tags" => ['mario', 'switch', 'wii_u']
        ],
        6 => [
            "developer" => "Santa Monica Studio",
            "tags" => ['kratos', 'ps4', 'windows']
        ],
        7 => [
            "developer" => "Rockstar Studios",
            "tags" => ['arthur_morgan', 'ps4', 'xbox_one', 'windows']
        ],
        8 => [
            "developer" => "Insomniac Games",
            "tags" => ['ratchet', 'clank', 'ps5']
        ],
        9 => [
            "developer" => "Blizzard Entertainment",
            "tags" => ['tracer', 'windows', 'ps4', 'xbox_one', 'switch']
        ],
        10 => [
            "developer" => "Sucker Punch Productions",
            "tags" => ['jin', 'ps4', 'ps5']
        ],
    ];

    return $tags[$id];
}
