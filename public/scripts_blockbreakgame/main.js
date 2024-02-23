
let imageBackground;
let imageColorBlocks = [];
let imageWaitingBlocks = [];

let waitingBlocks = [0, 0, 0];
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
    [-1, 1, -1, 0, 0, -1, -1, 3],
    [-1, 1, -1, 3, 1, -1, -1, 4],
    [-1, -1, 2, 0, 6, -1, -1, 2],
    [-1, -1, -1, 4, 0, -1, -1, 3],
    [-1, -1, -1, 0, 6, -1, -1, 0],
    [-1, -1, -1, 2, 0, 5, -1, 2],
    [-1, -1, -1, 0, 3, -1, 6, 3],
    [0, 4, 2, 6, 4, 1, 4, 5],
]

let mouseClickSensor = false;


class Block {
    constructor() {

        // Colors: 
        // 0 - RED, 1 - ORANGE, 2 - YELLOW, 
        // 3 - GREEN, 4 - NAVY, 5- BLUE, 
        // 6 - PINK, 7 - TRANSPARENT
        this.shape = [
            [-1, -1, -1],
            [-1, -1, -1],
            [-1, -1, -1],
        ];

        // Types:
        // 0 - Normal Block,
        // 1 - 
        // 2 - 
        this.type = 0;

    }
}



let tempBlock0 = new Block;

tempBlock0.shape = [
    [1, 2, 3],
    [0, -1, -1],
    [-1, -1, -1]
];

let tempBlock1 = new Block;

tempBlock1.shape = [
    [1, 2, 3],
    [0, -1, -1],
    [-1, -1, -1]
];

let tempBlock2 = new Block;

tempBlock2.shape = [
    [1, 2, 3],
    [0, -1, -1],
    [-1, -1, -1]
];




function preload() {
    imageBackground = loadImage("./images_blockbreakgame/blank_bg.png");
    imageBoard = loadImage("./images_blockbreakgame/blank_board.png")

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

    //waiting blocks
    imageNonSelectedBlock = loadImage("./images_blockbreakgame/non_selected.png");
    imageWaitingBlocks.push(imageNonSelectedBlock);
    imageFirstSelectedBlock = loadImage("./images_blockbreakgame/first_selected.png");
    imageWaitingBlocks.push(imageFirstSelectedBlock);
    imageSecondSelectedBlock = loadImage("./images_blockbreakgame/second_selected.png");
    imageWaitingBlocks.push(imageSecondSelectedBlock);
    imageThirdSelectedBlock = loadImage("./images_blockbreakgame/third_selected.png");
    imageWaitingBlocks.push(imageThirdSelectedBlock);

    //crown
    imageCrown = loadImage("./images_blockbreakgame/crown.png")
}

function setup() {
    frameRate(24);
    createCanvas(500, 800);

    waitingBlocks[0] = tempBlock0;
    waitingBlocks[1] = tempBlock1;
    waitingBlocks[2] = tempBlock2;
}

function draw() {

    background(imageBackground);

    drawCrown();





    // deleteBlocksOnBoard();
    drawBoard();
    // drawBlocks(tempBlock);
    drawWaitingBlocks();

    drawHoveringBlockProjection();

}

/* ==== ==== ==== ==== User Interfaces ==== ==== ==== ==== */

function doubleClicked() {

}

function mouseClicked() {
    mouseClickSensor = true;
}

function mouseDragged() {

}

/*  ==== ==== ==== ==== Visualization ==== ==== ==== ==== */

function drawBoard() {
    image(imageBoard, 50, 150)
    

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] != -1) {
                image(imageColorBlocks[board[i][j]], 50 + 50*j, 150 + 50*i);
            }
        }
    }
    
}

function drawBlocks(block) {

    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            
            if (block.shape[i][j] != -1) {
                image(imageColorBlocks[block.shape[i][j]], mouseX + 50*j, mouseY + 50*i);
            }
            
        }
        
    }
}

function drawCrown() {
    // let size = 100 + 500*sin(frameCount/10)
    image(imageCrown, 7, 0);
}

function drawWaitingBlocks() {

    // image(waitingBlocks[0], 29, 612);

}

function drawHoveringBlockProjection() {

    let tempBlock = waitingBlocks[0];
    let mX = mouseX;
    let mY = mouseY;

    





}

/*  ==== ==== ==== ==== Game Mechanics ==== ==== ==== ==== */

function deleteBlocksOnBoard() { //delete vertically or horizontally when full
    let tempBoard = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ]

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
                tempBoard[i][j] = -2;
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
                tempBoard[i][j] = -2;
            }
        }    
    }

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {    
            if (tempBoard[i][j] == -2) {
                board[i][j] = -1;
            }
        }
    }
    
}







