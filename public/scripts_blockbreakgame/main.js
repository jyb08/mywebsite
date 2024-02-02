
let imageBackground;
let imageColorBlocks = [];
// let board = [
//     [-1, -1, -1, -1, -1, -1, -1, -1],
//     [-1, -1, -1, -1, -1, -1, -1, -1],
//     [-1, -1, -1, -1, -1, -1, -1, -1],
//     [-1, -1, -1, -1, -1, -1, -1, -1],
//     [-1, -1, -1, -1, -1, -1, -1, -1],
//     [-1, -1, -1, -1, -1, -1, -1, -1],
//     [-1, -1, -1, -1, -1, -1, -1, -1],
//     [-1, -1, -1, -1, -1, -1, -1, -1],
// ]

let board = [
    [-1, 1, -1, -1, -1, -1, -1, 0],
    [-1, 1, -1, -1, -1, -1, -1, 0],
    [-1, -1, 2, -1, -1, -1, -1, 0],
    [-1, -1, -1, 3, -1, -1, -1, 0],
    [-1, -1, -1, -1, 4, -1, -1, 0],
    [-1, -1, -1, -1, -1, 5, -1, 2],
    [-1, -1, -1, -1, -1, -1, 6, 3],
    [0, 0, 0, 0, 0, 0, 0, 7],
]

let mouseClickSensor = false;


class Block {
    constructor() {

        // Colors: 
        // 0 - RED, 1 - ORANGE, 2 - YELLOW, 
        // 3 - GREEN, 4 - NAVY, 5- BLUE, 
        // 6 - PINK, 7 - TRANSPARENT
        this.color;

        this.shape = [
            [false, false, false],
            [false, false, false],
            [false, false, false]
        ];

    }
}



let tempBlock = new Block;

tempBlock.color = 0;
tempBlock.shape = [
    [0, 0, -1],
    [0, -1, -1],
    [-1, -1, -1]
];




function preload() {
    imageBackground = loadImage("./images_blockbreakgame/background.png");

    imageBlockRed = loadImage("./images_blockbreakgame/square_red.png");
    imageColorBlocks.push(imageBlockRed);
    imageBlockOrange = loadImage("./images_blockbreakgame/square_orange.png");
    imageColorBlocks.push(imageBlockOrange);
    imageBlockYellow = loadImage("./images_blockbreakgame/square_yellow.png");
    imageColorBlocks.push(imageBlockYellow);
    imageBlockGreen = loadImage("./images_blockbreakgame/square_green.png");
    imageColorBlocks.push(imageBlockGreen);
    imageBlockBlue = loadImage("./images_blockbreakgame/square_blue.png");
    imageColorBlocks.push(imageBlockBlue);
    imageBlockNavy = loadImage("./images_blockbreakgame/square_navy.png");
    imageColorBlocks.push(imageBlockNavy);
    imageBlockPink = loadImage("./images_blockbreakgame/square_pink.png");
    imageColorBlocks.push(imageBlockPink);
    imageBlockTransparent = loadImage("./images_blockbreakgame/square_transparent.png");
    imageColorBlocks.push(imageBlockTransparent);
}

function setup() {
    frameRate(24);
    createCanvas(500, 800);
}

function draw() {

    background(imageBackground);
    
    deleteBlocksOnBoard();
    drawBoard();
    drawBlocks(tempBlock);

}


function doubleClicked() {

}

function mouseClicked() {
    mouseClickSensor = true;
}

function mouseDragged() {

}

function deleteBlocksOnBoard() { //delete vertically or horizontally when full

    // Delete Horizontal Lines
    for (let i = 0; i < 8; i++) {
        let flag = true;

        for (let j = 0; j < 8; j++) {    
            if (board[i][j] != -1) {
                flag = flag && true;
            } else {
                flag = flag && false;
            }
                
        }

        if (flag) {
            for (let j = 0; j < 8; j++) {    
                board[i][j] = -1;
            }
        }
    }

    // Delete Vertical Lines
    for (let j = 0; j < 8; j++) {
        let flag = true;

        for (let i = 0; i < 8; i++) {    
            if (board[i][j] != -1) {
                flag = flag && true;
            } else {
                flag = flag && false;
            }
                
        }

        if (flag) {
            for (let i = 0; i < 8; i++) {    
                board[i][j] = -1;
            }
        }    
    }

}

function drawBoard() {

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] != -1) {
                image(imageColorBlocks[board[i][j]], 50 + 50*i, 150 + 50*j );
            }
        }
    }
    
}

function drawBlocks(block) {

    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            
            if (block.shape[i][j] != -1) {
                image(imageColorBlocks[block.color], mouseX + 50*i, mouseY + 50*j);
                
            }
            
        }
        
    }
}








