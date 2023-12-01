let roomImages = [];
let characterImages = [];
let itemImages = []

function preload() {

    // Room Images
    roomImages.push(0);
    roomImages.push(loadImage("./images_becomethekinggame/room01.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room02.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room03.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room04.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room05.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room06.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room07.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room08.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room09.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room10.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room11.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room12.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room13.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room14.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room15.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room16.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room17.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room18.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room19.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room20.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room21.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room22.png"));
    roomImages.push(loadImage("./images_becomethekinggame/room23.png"));

    // Character Images
    characterImages.push(0);
    characterImages.push([
        loadImage("./images_becomethekinggame/char01v01.png"),
        loadImage("./images_becomethekinggame/char01v02.png"),
        loadImage("./images_becomethekinggame/char01v03.png"),
    ]);
    characterImages.push(loadImage("./images_becomethekinggame/char02.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char03.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char04.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char05.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char06.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char07.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char08.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char09.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char10.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char11.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char12.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char13.png"));

    
    // Item Images


    
}

function setup() {
    frameRate(24);
    createCanvas(800, 400);
    imageMode(CENTER);
}

function draw() {

    background(0);

    // Display Background Room Scene
    drawBackgroundRoomScene();

    // Display NPCs. (Non-Playable Characters)
    drawNonPlayableCharacters();
    
    // Display Battle Characters
    drawBattleOpponentCharacters();
    
    if (gameData.currentRoomId != 23) {
        // Display Main Daphne Character
        drawMainDaphneCharacter();

        // Display Status Widgets
        drawStatusWidgets();

        // Display Items
        drawItems();
    }


}

function drawBackgroundRoomScene() {
    image(roomImages[gameData.currentRoomId], width/2, height/2); 
}

function drawNonPlayableCharacters() {

    let currentRoom = rooms[gameData.currentRoomId];
    
    let lengthCharacters = currentRoom.characters.length;

    if (lengthCharacters != 0) {
        for (let i = 0; i < lengthCharacters; i++) {
            let character = currentRoom.characters[i];

            image(characterImages[character.characterId], 
                character.x, 
                character.y, 
                character.w, 
                character.h);

            
            fill('white')
            rect(character.xStatusBox, character.yStatusBox, 100, 5);
            fill(163, 0, 0)
            rect(character.xStatusBox, character.yStatusBox, 
                100 * character.healthPoint / character.healthPointMax, 
                5);
        
        }
    }
    



}

function drawBattleOpponentCharacters() {

    let currentRoom = rooms[gameData.currentRoomId];
    let lengthCharacters = currentRoom.monsters.length;

    if (lengthCharacters != 0) {

        for (let index = lengthCharacters - 1; index >= 0; index--) {

            let monster = currentRoom.monsters[index];
    
            let multiplier = floor((index + 1) / 2);
            if ((index + 1) % 2 != 0) { // Odd Numbers: 1, 3, 5, 7...
                image(characterImages[monster.characterId], 
                    monster.x + 10 + 50 * multiplier, 
                    monster.y, 
                    monster.w * (1 - 0.05 * multiplier), 
                    monster.h * (1 - 0.05 * multiplier));
            } else if ((index + 1) % 2 == 0) { // Even Numbers: 2, 4, 6, 8...
                image(characterImages[monster.characterId], 
                    monster.x - 50 * multiplier, 
                    monster.y, 
                    monster.w * (1 - 0.05 * multiplier), 
                    monster.h * (1 - 0.05 * multiplier));
            }

            fill('white')
            rect(monster.xStatusBox, monster.yStatusBox, 100, 5);
            fill(163, 0, 0)
            rect(monster.xStatusBox, monster.yStatusBox, 
                100 * monster.healthPoint / monster.healthPointMax, 
                5);
    
        }
    }

    
    // rooms[gameData.currentRoomId].monsters[0]
}

function drawMainDaphneCharacter() {
    


    if (0 <= Daphne_1.level && Daphne_1.level <= 19) {
        image(characterImages[1][0], //lvl 0-19
            Daphne_1.x[0], Daphne_1.y[0], 
            Daphne_1.w[0], Daphne_1.h[0]);
    }
    
    else if (20 <= Daphne_1.level && Daphne_1.level <= 69) {
        image(characterImages[1][1], //lvl 20-69
            Daphne_1.x[1], Daphne_1.y[1], 
            Daphne_1.w[1], Daphne_1.h[1]);
    }
    
    else if (70 <= Daphne_1.level && Daphne_1.level <= 99) {
        image(characterImages[1][2], //lvl 70-99
            Daphne_1.x[2], Daphne_1.y[2], 
            Daphne_1.w[2], Daphne_1.h[2]);    
    }

    

}

function drawStatusWidgets() {
    
    // Daphne
    fill('white')
    rect(90, 380, 200, 10); // EP yellow
    rect(90, 365, 200, 10); // MP blue
    rect(90, 350, 200, 10); // HP red
    
    textSize(10);
    fill(255, 255, 255, 255);
    textStyle(BOLD);
    text("HP", 72, 358);
    text("MP", 71, 373);
    text("EP", 73, 388);
    
    // EP
    fill(243, 209, 83);
    rect(90, 380, 
        200 * Daphne_1.energyPoint / Daphne_1.energyPointMax, 10);
    
    // MP
    fill(0, 0, 163);
    rect(90, 365, 
        200 * Daphne_1.magicPoint / Daphne_1.magicPointMax, 10);

    // HP
    fill(163, 0, 0);
    rect(90, 350, 
        200 * Daphne_1.healthPoint / Daphne_1.healthPointMax, 10);
    
}

function drawItems() {

}




