
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
    [1, 1, -1, -1, 1, -1, -1, -1],
    [-1, 1, -1, -1, -1, -1, -1, -1],
    [-1, 1, -1, -1, -1, -1, -1, -1],
    [-1, 1, -1, -1, -1, -1, -1, -1],
    [-1, 1, -1, -1, -1, -1, -1, -1],
    [-1, 1, -1, -1, -1, -1, -1, -1],
    [-1, 1, -1, -1, -1, -1, -1, -1],
    [0, -1, 0, 0, 0, 0, 0, 0],
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

    textAlign(CENTER, CENTER);
    fill('rgb(255,255,255)');
    textStyle(BOLD);

    textSize(70);
    
    text("400", 250, 100);

}


function doubleClicked() {

}

function mouseClicked() {
    mouseClickSensor = true;
}

function mouseDragged() {

}

function deleteBlocksOnBoard() { //delete vertically or horizontally when full
    let flag_y;
    let flag_x;
    let set_i;
    let set_j;
    // Delete Vertical Lines
    for (let i = 0; i < 8; i++) {
        flag_y = true;
        for (let j = 0; j < 8; j++) {    
            if (board[i][j] != -1) {
                flag_y = flag_y && true;
                
            } else {
                flag_y = flag_y && false;
            } 
        }

        if(flag_y){
            set_i = i;
        }

        
    }

    

    // Delete Horizontal Lines
    for (let j = 0; j < 8; j++) {
        flag_x = true;
        for (let i = 0; i < 8; i++) {    
            if (board[i][j] != -1) {
                flag_x = flag_x && true;
                
            } else {
                flag_x = flag_x && false;
            }
                
        }  
    
        if (flag_x) {
            set_j = j;
        }

         
    }

    if (flag_x) {
        for (let i = 0; i < 8; i++) {    
            board[i][set_j] = -1;
        }
    } 

    if (flag_y) {
        for (let j = 0; j < 8; j++) {    
            board[set_i][j] = -1;
        }
    }

}

function drawBoard() {

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] != -1) {
                image(imageColorBlocks[board[i][j]], 50 + 50*i, 150 + 50*j);
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








