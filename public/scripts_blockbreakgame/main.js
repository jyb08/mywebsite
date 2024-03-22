let imageBackground;
let imageColorBlocks = [];
let imageColorBlocks_Extra1 = [];
let imageColorBlocks_Extra2 = [];
let imageColorBlocks_Extra3 = [];
let imageWaitingBlocks = [];

let waitingBlocks = [-1, -1, -1];
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
    [-1, -1, 2, 0, 6, -1, -1, -1],
    [-1, -1, -1, 4, 0, -1, -1, -1],
    [-1, -1, -1, 0, 6, -1, -1, -1],
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

        this.shapes = [
            [ [-1, -1, -1], [-1, 9, -1], [9, -1, -1] ], // 0 //shapes[0]
            [ [-1, -1, -1], [-1, 9, -1], [-1, 9, -1] ], // 1
            [ [-1, 9, -1], [9, 9, -1], [-1, -1, -1] ],  // 2
            [ [-1, -9, -1], [-1, 9, -1], [-1, 9, -1] ], // 3
            [ [-1, -1, 9], [-1, 9, -1], [-1, 9, -1] ], // 4
            [ [-1, -1, -1], [9, 9, 9], [-1, -1, 9] ], // 5
            [ [-1, -1, -1], [9, 9, 9], [9, -1, -1] ], // 6
            [ [-1, -1, -1], [9, 9, -1], [9, 9, -1] ], // 7
            [ [-1, -1, -1], [9, 9, -1], [-1, 9, 9] ], // 8
            [ [-1, 9, -1], [-1, 9, 9], [-1, -1, 9] ], // 9
            [ [-1, 9, -1], [9, 9, 9], [-1, -1, -1] ], // 10
            [ [-1, -1, 9], [-1, -1, 9], [9, 9, 9] ], // 11
            [ [9, -1, -1], [9, -1, -1], [9, 9, 9] ], // 12
            [ [-1, 9, -1], [-1, 9, 9], [-1, 9, 9] ], // 13
            [ [-1, 9, -1], [9, 9, -1], [9, 9, -1] ], // 14
            [ [-1, -1, -1], [9, 9, 9], [9, 9, 9] ], // 15
            [ [9, -1, -1], [9, 9, 9], [9, 9, -1] ], // 16
            [ [-1, -1, 9], [9, 9, 9], [-1, 9, 9] ], // 17
            [ [-1, 9, -1], [9, 9, 9], [9, 9, -1] ], // 18
            [ [9, 9, 9], [9, -1, 9], [9, 9, 9] ],  // 19
        ]
        
        // Types:
        // 0 - Normal Block
        // 1 - Item Block
        // 2 - Augmented Block
        this.type = 0;

        this.getRandomShape();
        this.getRandomDirection();
        this.getRandomColors();
    }

    // [ [-1, -1, -1],          [ [9, -1, -1], 
    //   [-1, 9, -1],     =>      [-1, 9, -1],
    //   [9, -1, -1] ]            [-1, -1, -1]]
    
    
    getRandomShape() {
        let count = Math.floor(Math.random() * 20);
        this.shape = this.shapes[count];
    }
    
    rotateBlockClockwise() {

        let newShape = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];

        newShape[0][0] = this.shape[0][0];
        newShape[1][0] = this.shape[1][0];
        newShape[2][0] = this.shape[2][0];

        newShape[0][1] = this.shape[0][1];
        newShape[1][1] = this.shape[1][1];
        newShape[2][1] = this.shape[2][1];

        newShape[0][2] = this.shape[0][2];
        newShape[1][2] = this.shape[1][2];
        newShape[2][2] = this.shape[2][2];

        this.shape[0][0] = newShape[0][2];
        this.shape[1][0] = newShape[0][1];
        this.shape[2][0] = newShape[0][0];

        this.shape[0][1] = newShape[1][2];
        this.shape[1][1] = newShape[1][1];
        this.shape[2][1] = newShape[1][0];

        this.shape[0][2] = newShape[2][2];
        this.shape[1][2] = newShape[2][1];
        this.shape[2][2] = newShape[2][0];
       
    }

    getRandomDirection() {
        let count = Math.floor(Math.random() * 4);
        for (let i = 0; i < count; i++) {
            this.rotateBlockClockwise();
        }
    }

    getRandomColors() {
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                if (this.shape[i][j] == 9) {
                    let count = Math.floor(Math.random() * 7);
                    this.shape[i][j] = count;
                }   
            }
        }
    }
    
}


let block00 = new Block;
let block01 = new Block;
let block02 = new Block; 

// 0 => Non-Select, 1 => 1st Selected, 2 => 2nd Selected, 3 => 3rd Selected
let locationBlocksSelected = 0;

function preload() {
    imageBackground = loadImage("./images_blockbreakgame/blank_bg.png");
    imageBoard = loadImage("./images_blockbreakgame/blank_board.png")

    // imageColorBlocks
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

    // imageColorBlocks_Extra1
    imageColorBlocks_Extra1.push(loadImage("./images_blockbreakgame/square_red.png"));
    imageColorBlocks_Extra1.push(loadImage("./images_blockbreakgame/square_orange.png"));
    imageColorBlocks_Extra1.push(loadImage("./images_blockbreakgame/square_yellow.png"));
    imageColorBlocks_Extra1.push(loadImage("./images_blockbreakgame/square_green.png"));
    imageColorBlocks_Extra1.push(loadImage("./images_blockbreakgame/square_blue.png"));
    imageColorBlocks_Extra1.push(loadImage("./images_blockbreakgame/square_navy.png"));
    imageColorBlocks_Extra1.push(loadImage("./images_blockbreakgame/square_pink.png"));
    imageColorBlocks_Extra1.push(loadImage("./images_blockbreakgame/square_transparent.png"));

    // imageColorBlocks_Extra2
    imageColorBlocks_Extra2.push(loadImage("./images_blockbreakgame/square_red.png"));
    imageColorBlocks_Extra2.push(loadImage("./images_blockbreakgame/square_orange.png"));
    imageColorBlocks_Extra2.push(loadImage("./images_blockbreakgame/square_yellow.png"));
    imageColorBlocks_Extra2.push(loadImage("./images_blockbreakgame/square_green.png"));
    imageColorBlocks_Extra2.push(loadImage("./images_blockbreakgame/square_blue.png"));
    imageColorBlocks_Extra2.push(loadImage("./images_blockbreakgame/square_navy.png"));
    imageColorBlocks_Extra2.push(loadImage("./images_blockbreakgame/square_pink.png"));
    imageColorBlocks_Extra2.push(loadImage("./images_blockbreakgame/square_transparent.png"));

    // imageColorBlocks_Extra3
    imageColorBlocks_Extra3.push(loadImage("./images_blockbreakgame/square_red.png"));
    imageColorBlocks_Extra3.push(loadImage("./images_blockbreakgame/square_orange.png"));
    imageColorBlocks_Extra3.push(loadImage("./images_blockbreakgame/square_yellow.png"));
    imageColorBlocks_Extra3.push(loadImage("./images_blockbreakgame/square_green.png"));
    imageColorBlocks_Extra3.push(loadImage("./images_blockbreakgame/square_blue.png"));
    imageColorBlocks_Extra3.push(loadImage("./images_blockbreakgame/square_navy.png"));
    imageColorBlocks_Extra3.push(loadImage("./images_blockbreakgame/square_pink.png"));
    imageColorBlocks_Extra3.push(loadImage("./images_blockbreakgame/square_transparent.png"));

    // waiting blocks
    imageNonSelectedBlock = loadImage("./images_blockbreakgame/non_selected.png");
    imageWaitingBlocks.push(imageNonSelectedBlock);
    imageFirstSelectedBlock = loadImage("./images_blockbreakgame/first_selected.png");
    imageWaitingBlocks.push(imageFirstSelectedBlock);
    imageSecondSelectedBlock = loadImage("./images_blockbreakgame/second_selected.png");
    imageWaitingBlocks.push(imageSecondSelectedBlock);
    imageThirdSelectedBlock = loadImage("./images_blockbreakgame/third_selected.png");
    imageWaitingBlocks.push(imageThirdSelectedBlock);

    // crown
    imageCrown = loadImage("./images_blockbreakgame/crown.png")
}

function setup() {
    preload();
    frameRate(12);
    createCanvas(500, 800);

    waitingBlocks[0] = block00;
    waitingBlocks[1] = block01;
    waitingBlocks[2] = block02;

}

function draw() {

    background(imageBackground);

    drawCrown();

    deleteBlocksOnBoard();

    drawBoard();

    drawHoveringBlockProjection();

    calculateGameOver();

    drawSelectedBlocks();

    drawBlocksOnSelectionBar();

}

/* ==== ==== ==== ==== User Interfaces ==== ==== ==== ==== */

function doubleClicked() {

}

function mouseClicked() {
    console.log("X: " + mouseX + "  /  Y: " + mouseY);

    mouseClickSensor = true;
    let ij = detectBoardLocationWithMouse();

    if (locationBlocksSelected != -1) {
        let tempBlock = waitingBlocks[locationBlocksSelected];
    
        if (isBlockPositionEmpty(tempBlock)) {
            for (let a = -1; a <= 1; a++) {
                for (let b = -1; b <= 1; b++) {
                    if (tempBlock.shape[1 + b][1 + a] != -1) {
                        board[ij[1] + b][ij[0] + a] = tempBlock.shape[1 + b][1 + a];
                    }
                }
            }

            waitingBlocks[locationBlocksSelected] = -1;
            locationBlocksSelected = -1;

            // newly load the 3 blocks
            if (waitingBlocks[0] == -1 && waitingBlocks[1] == -1 && waitingBlocks[2] == -1) {
                waitingBlocks[0] = new Block;
                waitingBlocks[1] = new Block;
                waitingBlocks[2] = new Block;
            }
            
        }
    }

    if (detectAreaWithCoordinates(29, 596, 157, 597, 158, 726, 27, 725, mouseX, mouseY)) {
        locationBlocksSelected = 0;
    } else if (detectAreaWithCoordinates(184, 596, 314, 597, 315, 726, 186, 725, mouseX, mouseY)) {
        locationBlocksSelected = 1;
    } else if (detectAreaWithCoordinates(340, 597, 470, 598, 469, 726, 339, 726, mouseX, mouseY)) {
        locationBlocksSelected = 2;
    } else {
        locationBlocksSelected = -1;
    }

}

function mouseDragged() {

}

/*  ==== ==== ==== ==== Visualization ==== ==== ==== ==== */

function drawBoard() {
    image(imageBoard, 50, 150);
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

function drawSelectedBlocks() {
    if (locationBlocksSelected == -1) {
        image(imageNonSelectedBlock, 29, 597);
    } else if (locationBlocksSelected == 0) {
        image(imageFirstSelectedBlock, 29, 597);
    } else if (locationBlocksSelected == 1) {
        image(imageSecondSelectedBlock, 29, 597);
    } else if (locationBlocksSelected == 2) {
        image(imageThirdSelectedBlock, 29, 597);
    } 
}

function drawBlocksOnSelectionBar() {

    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {

            if (waitingBlocks[0] != -1) {
                let iBlockNumber = waitingBlocks[0].shape[i][j];
                if (iBlockNumber != -1) {
                    //console.log("ERROR!!!! HERE!!!: " + iBlockNumber);

                    // if () {
                    //     console.log("I AM DYING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!: ");
                    // }
                    image(imageColorBlocks_Extra1[iBlockNumber],      
                        50 + j * 30, 616 + i * 30, 30, 30)
                }

            }

            if (waitingBlocks[1] != -1) {
                let iBlockNumber = waitingBlocks[1].shape[i][j];
                if (iBlockNumber != -1) {
                    image(imageColorBlocks_Extra2[iBlockNumber], 
                        203 + j * 30, 616 + i * 30, 30, 30)
                }

            }
            
            if (waitingBlocks[2] != -1) {
                let iBlockNumber = waitingBlocks[2].shape[i][j];
                if (iBlockNumber != -1) {
                    image(imageColorBlocks_Extra3[iBlockNumber], 
                        360 + j * 30, 616 + i * 30, 30, 30)
                }
            }

        }
    }

}

function drawCrown() {
    // let size = 100 + 500*sin(frameCount/10)
    image(imageCrown, 7, 0);
}

function isBlockPositionEmpty(tempBlock) {
    let allEmpty = true;
    let ij = detectBoardLocationWithMouse();
    
    for (let a = -1; a <= 1; a++) {
        for (let b = -1; b <= 1; b++) {

            let inside = 0 <= (ij[0] + a) && (ij[0] + a) <= 7 
                && 0 <= (ij[1] + b) && (ij[1] + b) <= 7;
                
            if (tempBlock.shape[b + 1][a + 1] != -1
                && inside
                && board[(ij[1] + b)][(ij[0] + a)] == -1
                ) {
                allEmpty = true && allEmpty;
            } else if (tempBlock.shape[b + 1][a + 1] != -1
                && inside
                && board[(ij[1] + b)][(ij[0] + a)] != -1
                ) {
                allEmpty = false && allEmpty;
            } else if (tempBlock.shape[b + 1][a + 1] != -1
                && !inside) {
                allEmpty = false && allEmpty;
            }
        }
    }

    return allEmpty;
}

function drawHoveringBlockProjection() {
    if (locationBlocksSelected != -1) {

        let tempBlock = waitingBlocks[locationBlocksSelected];
        let mX = mouseX;
        let mY = mouseY;
        let ij = detectBoardLocationWithMouse();
        
        for (let x = 0; x <= 2; x++) {
            for (let y = 0; y <= 2; y++) {
                if (tempBlock.shape[x][y] != -1 && isBlockPositionEmpty(tempBlock)) {
                    image(imageBlockTransparent, 
                        ij[0]*50 + (y)*50, 
                        ij[1]*50 + 50 + (x+1)*50);
                }
            }
        }
    }   
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

function detectBoardLocationWithMouse() {
    let mX = mouseX;
    let mY = mouseY; 
    let ij = [-1, -1];

    ij[0] = int((mX - 50)/50);
    
    ij[1] = int((mY - 150)/50);
    
    return ij;
}

function calculuateScore() {
    let overallPoint = 0;


    // placed block size - 1개면 1점, 9개면, 9점
    // canceled line - 한줄이 나가면 10점
    // double cancel - 10^2 
    // triple cancel - 10^3
    // later: 10^3 x a (4 cancel = 4000) (5 cancel = 5000)
    // combo + comboCount = 100 + 5^comboCount
}


function calculateGameOver() {

}

function calculateLineEquation(x1, y1, x2, y2) {
    slope = (y2 - y1).toFixed(4) / (x2 - x1).toFixed(4);
    intercept = y1 - ((y2 - y1).toFixed(4) / (x2 - x1).toFixed(4)) * x1;
    return [slope, intercept];
}

function detectAreaWithCoordinates(x1, y1, x2, y2, x3, y3, x4, y4, a, b) {
    line1_slope = calculateLineEquation(x1, y1, x2, y2)[0];
    line1_intercept = calculateLineEquation(x1, y1, x2, y2)[1];
    
    line2_slope = calculateLineEquation(x2, y2, x3, y3)[0];
    line2_intercept = calculateLineEquation(x2, y2, x3, y3)[1];
    
    line3_slope = calculateLineEquation(x3, y3, x4, y4)[0];
    line3_intercept = calculateLineEquation(x3, y3, x4, y4)[1];
    
    line4_slope = calculateLineEquation(x4, y4, x1, y1)[0];
    line4_intercept = calculateLineEquation(x4, y4, x1, y1)[1];
    
    condition1 = (b > (line1_slope * a + line1_intercept)) ? true : false;

    if (line2_slope > 0) {
        condition2 = (b > (line2_slope * a + line2_intercept)) ? true : false;
    } else {
        condition2 = (b < (line2_slope * a + line2_intercept)) ? true : false;
    }

    condition3 = (b < (line3_slope * a + line3_intercept)) ? true : false;

    if (line4_slope > 0) {
        condition4 = (b < (line4_slope * a + line4_intercept)) ? true : false;
    } else {
        condition4 = (b > (line4_slope * a + line4_intercept)) ? true : false;
    }
    
    return condition1 && condition2 && condition3 && condition4;
}

