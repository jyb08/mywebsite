let imageBackground;
let imageColorBlocks = [];
let imageWaitingBlocks = [];

let waitingBlocks = [-1, -1, -1];
let board = [
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],

]



let mouseClickSensor = false;
let globalScore = 0;
let globalScoreComboCount = 0;
let isItOver = null;



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
            [ [-1, 9, -1], [-1, 9, -1], [-1, 9, -1] ], // 3
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

    getSize() {
        let size = 0;
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                if (this.shape[i][j] != -1) {
                    size++;
                }

            }
        }
        return size;
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
    imageBlockRed = loadImage("./images_blockbreakgame/square_red.png"); // 0
    imageColorBlocks.push(imageBlockRed);
    imageBlockOrange = loadImage("./images_blockbreakgame/square_orange.png"); // 1
    imageColorBlocks.push(imageBlockOrange);
    imageBlockYellow = loadImage("./images_blockbreakgame/square_yellow.png"); // 2
    imageColorBlocks.push(imageBlockYellow);
    imageBlockGreen = loadImage("./images_blockbreakgame/square_green.png"); // 3
    imageColorBlocks.push(imageBlockGreen);
    imageBlockBlue = loadImage("./images_blockbreakgame/square_blue.png"); // 4
    imageColorBlocks.push(imageBlockBlue);
    imageBlockNavy = loadImage("./images_blockbreakgame/square_navy.png"); // 5
    imageColorBlocks.push(imageBlockNavy);
    imageBlockPink = loadImage("./images_blockbreakgame/square_pink.png"); //6
    imageColorBlocks.push(imageBlockPink);
    imageBlockTransparent = loadImage("./images_blockbreakgame/square_transparent.png"); // 7
    imageColorBlocks.push(imageBlockTransparent);

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

    //gameOver
    gameOver = loadImage("./images_blockbreakgame/gameOver.png")
}

function setup() {
    preload();
    frameRate(12);
    createCanvas(500, 800);

    waitingBlocks[0] = block00;
    waitingBlocks[1] = block01;
    waitingBlocks[2] = block02;

    font = loadFont("./fonts/BungeeSpice-Regular.ttf");

}

function draw() {

    background(imageBackground);

    drawCrownAndScore();

    drawBoard();

    drawHoveringBlockProjection();


    drawSelectedBlocks();

    drawBlocksOnSelectionBar();
    
    if (isItOver) {
        image(gameOver, 75, 270); 
    }


}

/* ==== ==== ==== ==== User Interfaces ==== ==== ==== ==== */

function doubleClicked() {

}

function mouseClicked() {
    
    if (isItOver) {
        window.location.reload();
        return;
    }

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
                    // else {
                    //     board[ij[1] + b][ij[0] + a] = -1;
                    // }
                }
            }

            deleteBlocksOnBoard(tempBlock);
            waitingBlocks[locationBlocksSelected] = -1;
            locationBlocksSelected = -1;

            // newly load the 3 blocks
            if (waitingBlocks[0] == -1 && waitingBlocks[1] == -1 && waitingBlocks[2] == -1) {
                refillNew3Blocks();
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


    // let testShape = [ 
    //     [9, 9, 9], 
    //     [-1, -1, 9], 
    //     [-1, -1, -1] 
    // ];
    
    calculateGameOver();

    // console.log("DEBUG - testShape: ");
    // console.log(testShape);
    // let resultingShape = convertEssentialComparisonShape(testShape);
    
    // console.log("DEBUG - resultingShape: ");
    // console.log(resultingShape);
    
    //console.log("DEBUG - CHECKING AVAIL: ");

    
    //console.log(slicedShape);
    //let result = checkSpaceAvailability(slicedShape);
    //c/onsole.log(result);
    //checkSpaceAvailability(slicedShape);

    //console.log("X: " + mouseX + " Y: " + mouseY);
    
    
}

function refillNew3Blocks() {

    for (let j = 0; j < 3; j++) {
        let i = 0;
        while (i < 10) {
            let tempBlock = new Block;
            if (checkSpaceAvailability(tempBlock.shape)) {
                waitingBlocks[j] = tempBlock;
                console.log( "[" + j + "]  EASY BLOCK!!!!" + tempBlock.shape);
                break;
            }
            i++;
        }
        if (waitingBlocks[j] == -1) {
            waitingBlocks[j] = new Block;
            console.log( "[" + j + "]  Hard Block!!!!!!!!!")
        }
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
                
                let imageNumber = board[i][j];    
                
                if (imageNumber == 0) {
                    image(imageBlockRed, 50 + 50*j, 150 + 50*i);
                } else if (imageNumber == 1) {
                    image(imageBlockOrange, 50 + 50*j, 150 + 50*i);
                } else if (imageNumber == 2) {
                    image(imageBlockYellow, 50 + 50*j, 150 + 50*i);
                } else if (imageNumber == 3) {
                    image(imageBlockGreen, 50 + 50*j, 150 + 50*i);
                } else if (imageNumber == 4) {
                    image(imageBlockBlue, 50 + 50*j, 150 + 50*i);
                } else if (imageNumber == 5) {
                    image(imageBlockNavy, 50 + 50*j, 150 + 50*i);
                } else if (imageNumber == 6) {
                    image(imageBlockPink, 50 + 50*j, 150 + 50*i);
                } 
            }
        }
    }

}
 
function drawBlocks(block) {
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            if (block.shape[i][j] != -1) {

                let imageNumber = block.shape[i][j];    
                
                if (imageNumber == 0) {
                    image(imageBlockRed, mouseX + 50*j, mouseY + 50*i);
                } else if (imageNumber == 1) {
                    image(imageBlockOrange, mouseX + 50*j, mouseY + 50*i);
                } else if (imageNumber == 2) {
                    image(imageBlockYellow, mouseX + 50*j, mouseY + 50*i);
                } else if (imageNumber == 3) {
                    image(imageBlockGreen, mouseX + 50*j, mouseY + 50*i);
                } else if (imageNumber == 4) {
                    image(imageBlockBlue, mouseX + 50*j, mouseY + 50*i);
                } else if (imageNumber == 5) {
                    image(imageBlockNavy, mouseX + 50*j, mouseY + 50*i);
                } else if (imageNumber == 6) {
                    image(imageBlockPink, mouseX + 50*j, mouseY + 50*i);
                } 
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
                
                    if (iBlockNumber == 0) {
                        image(imageBlockRed, 50 + j * 30, 616 + i * 30, 30, 30);
                    } else if (iBlockNumber == 1) {
                        image(imageBlockOrange, 50 + j * 30, 616 + i * 30, 30, 30);
                    } else if (iBlockNumber == 2) {
                        image(imageBlockYellow, 50 + j * 30, 616 + i * 30, 30, 30);
                    } else if (iBlockNumber == 3) {
                        image(imageBlockGreen, 50 + j * 30, 616 + i * 30, 30, 30);
                    } else if (iBlockNumber == 4) {
                        image(imageBlockBlue, 50 + j * 30, 616 + i * 30, 30, 30);
                    } else if (iBlockNumber == 5) {
                        image(imageBlockNavy, 50 + j * 30, 616 + i * 30, 30, 30);
                    } else if (iBlockNumber == 6) {
                        image(imageBlockPink, 50 + j * 30, 616 + i * 30, 30, 30);
                    } 

                }

            }

            if (waitingBlocks[1] != -1) {
                let iBlockNumber = waitingBlocks[1].shape[i][j];
                if (iBlockNumber != -1) {

                    if (iBlockNumber == 0) {
                        image(imageBlockRed, 203 + j * 30, 616 + i * 30, 30, 30);
                    } else if (iBlockNumber == 1) {
                        image(imageBlockOrange, 203 + j * 30, 616 + i * 30, 30, 30);
                    } else if (iBlockNumber == 2) {
                        image(imageBlockYellow, 203 + j * 30, 616 + i * 30, 30, 30);
                    } else if (iBlockNumber == 3) {
                        image(imageBlockGreen, 203 + j * 30, 616 + i * 30, 30, 30);
                    } else if (iBlockNumber == 4) {
                        image(imageBlockBlue, 203 + j * 30, 616 + i * 30, 30, 30);
                    } else if (iBlockNumber == 5) {
                        image(imageBlockNavy, 203 + j * 30, 616 + i * 30, 30, 30);
                    } else if (iBlockNumber == 6) {
                        image(imageBlockPink, 203 + j * 30, 616 + i * 30, 30, 30);
                    } 

                }

            }
            
            if (waitingBlocks[2] != -1) {
                let iBlockNumber = waitingBlocks[2].shape[i][j];
                if (iBlockNumber != -1) {
                    
                    if (iBlockNumber == 0) {
                        image(imageBlockRed, 360 + j * 30, 616 + i * 30, 30, 30);
                    } else if (iBlockNumber == 1) {
                        image(imageBlockOrange, 360 + j * 30, 616 + i * 30, 30, 30);
                    } else if (iBlockNumber == 2) {
                        image(imageBlockYellow, 360 + j * 30, 616 + i * 30, 30, 30);
                    } else if (iBlockNumber == 3) {
                        image(imageBlockGreen, 360 + j * 30, 616 + i * 30, 30, 30);
                    } else if (iBlockNumber == 4) {
                        image(imageBlockBlue, 360 + j * 30, 616 + i * 30, 30, 30);
                    } else if (iBlockNumber == 5) {
                        image(imageBlockNavy, 360 + j * 30, 616 + i * 30, 30, 30);
                    } else if (iBlockNumber == 6) {
                        image(imageBlockPink, 360 + j * 30, 616 + i * 30, 30, 30);
                    } 
                    
                }
            }

        }
    }

}

function drawCrownAndScore() {
    // let size = 100 + 500*sin(frameCount/10)
    image(imageCrown, 7, 0);

    textSize(45);
    fill(255, 255, 255, 210);
    textAlign(LEFT, CENTER);
    textFont(font);

    text(globalScore, 70, 33);

    
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

/*  ==== ==== ==== ==== Board-Block Matching Algorithms ==== ==== ==== ==== */




// let board = [
//     [-1,  1, -1,  0,  0, -1, -1,  3],
//     [-1,  1, -1,  3,  1, -1, -1,  4],
//     [-1, -1,  2,  0,  6, -1, -1, -1],
//     [-1, -1, -1,  4,  0, -1, -1, -1],
//     [-1, -1, -1,  0,  6, -1, -1, -1],
//     [-1, -1, -1,  2,  0,  5, -1,  2],
//     [-1, -1, -1,  0,  3, -1,  6,  3],
//     [ 0,  4,  2,  6,  4,  1,  4,  5],
// ] // EXAMPLE BOARD, DELETE AFTER COMPLETING THE FUNCTION!!!!!!!!!!!!!!!!!!!!!

/**
 
window를 슬라이스드쉐이프에 다이멘션에 맞춰서 자르고, 잘린 보드 window를 모양이랑 비교. 
 */
function checkSpaceAvailability(slicedShape) {

    let result = false;

    let xLength = slicedShape[0].length;
    let yLength = slicedShape.length;
    
    let numberOfFilledBlocks = 0;
    for (let a = 0; a < yLength; a++) {
        for (let b = 0; b < xLength; b++) {
            if (slicedShape[a][b] != -1) {
                numberOfFilledBlocks++;
            } 
        } 
    }  
    for (let y = 0; y < 8 - yLength + 1; y++) {
        for (let x = 0; x < 8 - xLength + 1; x++) {
            let i = 0; 
            
            

            for (let a = 0; a < yLength; a++) {
                for (let b = 0; b < xLength; b++) {
                    if (slicedShape[a][b] != -1 && board[y + a][x + b] == -1) {
                        //console.log("TRUE " + a + ',' + b);
                            // HERE  TODO: dimension의 크기의 맞는 
                            // number of times all true여야지면 TRUE이도록 edit 하시오.
                        i++;
                    }
                }
            }
            //console.log("new" + " & i= " + i);
            if (numberOfFilledBlocks == i) {
                result = true;
            }
        }
    }
    return result;
}

/**
 * Accept 3x3 block arrays to convert it as arrays for empty-spot detection.
 * Resulting arrays can be any dimension (2x3, 2x2, etc.)
 * Horizontal variables will contain the x coordinate 
 * Vertical variables will contain the y coordinate
 */
function convertEssentialComparisonShape(originalShape) { 


    let verticalTop = -1;
    let verticalBottom = -1;
    let horizontalLeft = -1;
    let horizontalRight = -1;

    for (let x = 0; x <= 2; x++) {
        for (let y = 0; y <= 2; y++) {
            if (originalShape[x][y] != -1 && verticalTop == -1) {
                verticalTop = x;
            }
        }
    }

    for (let y = 0; y <= 2; y++) {
        for (let x = 0; x <= 2; x++) {
            if (originalShape[x][y] != -1 && horizontalLeft == -1) {
                horizontalLeft = y;
            }
        }
    }


    for (let x = 2; x >= 0; x--) {
        for (let y = 2; y >= 0; y--) {
            if (originalShape[x][y] != -1 && verticalBottom == -1) {
                verticalBottom = x;
            }
        }
    }

    for (let y = 2; y >= 0; y--) {
        for (let x = 2; x >= 0; x--) {
            if (originalShape[x][y] != -1 && horizontalRight == -1) {
                horizontalRight = y;
            }
        }
    }




    // Vertical Slice
    let resultingShapeVSliced = originalShape.slice(verticalTop, verticalBottom + 1);

    // Horizotal Slice
    for (let j = 0; j < resultingShapeVSliced.length; j++) {
        resultingShapeVSliced[j] 
            = resultingShapeVSliced[j].slice(horizontalLeft, horizontalRight + 1);
    }
    
    let resultingShape = resultingShapeVSliced;

    return resultingShape;
}

/*  ==== ==== ==== ==== Game Mechanics ==== ==== ==== ==== */

function deleteBlocksOnBoard(currentBlock) { //delete vertically or horizontally when full
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

    let numberOfDeletedLines = 0;
    let blockDeleted = false;

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
            numberOfDeletedLines++;
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
            numberOfDeletedLines++;
        }    
    }

    // Delete Actual Blocks
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {    
            if (tempBoard[i][j] == -2) {
                board[i][j] = -1;
                blockDeleted = true;
            }
        }
    }

    /**
     * Calculate Scores
     */ 
    
    // placed block size - score increases as the number of block placed increases
    globalScore += currentBlock.getSize(); 

    // canceled line - single line -> + 10
    // double cancel - +10^2 
    // triple cancel - +10^3
    if (numberOfDeletedLines > 0 && numberOfDeletedLines <= 3) {
        globalScore += pow(10, numberOfDeletedLines);
    }

    // later: 10^3 x a (4 cancel = 4000) (5 cancel = 5000)
    if (numberOfDeletedLines >= 4) {
        globalScore += (pow(10, 3)*(numberOfDeletedLines));
    }

    // combo + comboCount = 20^comboCount
    if (blockDeleted == false) {
        globalScoreComboCount = 0;
    } else {
        globalScoreComboCount++;
    }
    globalScore += pow(10, globalScoreComboCount);

    
}

function detectBoardLocationWithMouse() {
    let mX = mouseX;
    let mY = mouseY; 
    let ij = [-1, -1];

    ij[0] = int((mX - 50)/50);
    
    ij[1] = int((mY - 150)/50);
    
    return ij;
}


// THEN IMPLEMNT THE ALGORITHM TO EASE THE GAME AND STRAIN IT FROM ENDING. 
function calculateGameOver() {
    let isItOver0 = true;
    let isItOver1 = true;
    let isItOver2 = true;

    if (waitingBlocks[0] != -1) {
        if (checkSpaceAvailability(convertEssentialComparisonShape(waitingBlocks[0].shape)) == false) {
            isItOver0 = true;
        } else {
            isItOver0 = false;
        }
    }
     
    if (waitingBlocks[1] != -1) {
        if (checkSpaceAvailability(convertEssentialComparisonShape(waitingBlocks[1].shape)) == false) {
            isItOver1 = true;
        } else {
            isItOver1 = false;
        }
    }


    if (waitingBlocks[2] != -1) {
        if (checkSpaceAvailability(convertEssentialComparisonShape(waitingBlocks[2].shape)) == false) {
            isItOver2 = true;
        } else {
            isItOver2 = false;
        }
    }

    isItOver = isItOver0 && isItOver1 && isItOver2;
    
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

