
let scene = "MainScene"; //

// EMPTY, F_STATE, I_STATE, S_STATE, FINISHED
let passwordSceneState = "EMPTY";
let passwordSceneStateForGameover = 0;
let passwordScene2StateForGameover = 0;
let passwordScene2State = "DEFAULT";
let passwordScene3StateForPlayer = "";
let passwordScene3StateForComputer = "";
let passwordScene3GameResult = "";

// save game button info
let frameCountInitial = 0;
let frameCountFinal = 0;

let saveB;
let main_img;
let font;
let start_button;
let load_button;
let exit_button;
let title;
let jessica;
let game_over;
let pasta_resto;
let room1;
let letter;
let prologue;

let PasswordScene;
let fInserted;
let iInserted;
let sInserted;
let hInserted;

let room2;
let hanja;
let pokemon;
let graph;
let letter2;
let default1; 

let one; 
let two;
let three;
let four;
let room2_4_psw;
let default_4_pw;
let InfoB4Room3;
let room3;
let room3_password;
let rock;
let paper;
let scissors;
let rock_selected;
let paper_selected;
let scissors_selected;
let rules;
let last_door;
let rockSaltFont;

let volumeSystem;

let soundMainScene;
let soundIntroScene;
let soundPrologueScene;
let soundRoom1Scene;
let soundPasswordScene;
let soundRoom2Scene;
let soundPassword2Scene;
let soundPassword3Scene;
let soundFinalResultScene;
let soundGameOverScene;
let soundInfoBeforeRoom3;
let soundLastRoom;

function preload() {
    soundMainScene = loadSound('./sounds_escaperoomgame/fearverb-21486.mp3');
    soundIntroScene = loadSound('./sounds_escaperoomgame/nycdiner.mp3');
    soundPrologueScene = loadSound('./sounds_escaperoomgame/dark3.mp3');
    soundRoom1Scene = loadSound('./sounds_escaperoomgame/aloneineroom.mp3');
    soundPasswordScene = loadSound('./sounds_escaperoomgame/scaryhorror.mp3');
    soundRoom2Scene = loadSound('./sounds_escaperoomgame/scaryforest.mp3');
    soundPassword2Scene = loadSound('./sounds_escaperoomgame/creepycrime.mp3');
    soundPassword3Scene = loadSound('./sounds_escaperoomgame/orchestra.mp3');
    soundFinalResultScene = loadSound('./sounds_escaperoomgame/cresent.mp3');
    soundGameOverScene = loadSound('./sounds_escaperoomgame/pipeorgan.mp3');
    soundInfoBeforeRoom3 = loadSound('./sounds_escaperoomgame/tragiccry.mp3');
    soundLastRoom = loadSound('./sounds_escaperoomgame/hope.mp3');
}

function setup() {

    frameRate(24);
    createCanvas(1200, 800);
    outputVolume(0.05);

    //main:
    saveB = loadImage("./images_escaperoomgame/main/saveB.png");
    main_img = loadImage("./images_escaperoomgame/main/main_img.png");
    font = loadFont("./fonts/arial.ttf");
    start_button = loadImage("./images_escaperoomgame/main/start_button.png");
    load_button = loadImage("./images_escaperoomgame/main/load_button.png");
    exit_button = loadImage("./images_escaperoomgame/main/exit_button.png");
    title = loadImage("./images_escaperoomgame/main/title.png");
    jessica = loadImage("./images_escaperoomgame/main/jessica.png");
    game_over = loadImage("./images_escaperoomgame/main/game_over.png");

    //intro
    pasta_resto = loadImage("./images_escaperoomgame/intro/pasta_resto.png");

    //room1
    room1 = loadImage("./images_escaperoomgame/room1/room1.png");
    letter = loadImage("./images_escaperoomgame/room1/letter.png");
    prologue = loadImage("./images_escaperoomgame/intro/prologue.png");

    //passwordscene
    PasswordScene = loadImage("./images_escaperoomgame/room_password/PasswordScene.png");
    fInserted = loadImage("./images_escaperoomgame/room_password/fInserted.png");
    iInserted = loadImage("./images_escaperoomgame/room_password/iInserted.png");
    sInserted = loadImage("./images_escaperoomgame/room_password/sInserted.png");
    hInserted = loadImage("./images_escaperoomgame/room_password/hInserted.png");
   
    //room2
    room2 = loadImage("./images_escaperoomgame/room2/room2.png");
    hanja = loadImage("./images_escaperoomgame/room2/hanja.png");
    pokemon = loadImage("./images_escaperoomgame/room2/pokemon.png");
    graph = loadImage("./images_escaperoomgame/room2/graph.png");
    letter2 = loadImage("./images_escaperoomgame/room2/letter2.png");
    default1 = loadImage("./images_escaperoomgame/room2/default.png");

    //room2_password
    one = loadImage("./images_escaperoomgame/room2_password/one.png");
    two = loadImage("./images_escaperoomgame/room2_password/two.png");
    three = loadImage("./images_escaperoomgame/room2_password/three.png");
    four = loadImage("./images_escaperoomgame/room2_password/four.png");
    room2_4_psw  = loadImage("./images_escaperoomgame/room2_password/room2_4_psw.png");
    default_4_pw  = loadImage("./images_escaperoomgame/room2_password/default_4_pw.png");
    InfoB4Room3 = loadImage("./images_escaperoomgame/InfoBeforeRoom3/InfoB4Room3.png");
    //room3  = loadImage("./images_escaperoomgame/room3/room3.jpg")
    room3_password  = loadImage("./images_escaperoomgame/room3_password/room3_password.jpg");
    rock  = loadImage("./images_escaperoomgame/room3_password/rock.png");
    paper  = loadImage("./images_escaperoomgame/room3_password/paper.png");
    scissors  = loadImage("./images_escaperoomgame/room3_password/scissors.png");
    rock_selected  = loadImage("./images_escaperoomgame/room3_password/rock_selected.png");
    paper_selected  = loadImage("./images_escaperoomgame/room3_password/paper_selected.png");
    scissors_selected  = loadImage("./images_escaperoomgame/room3_password/scissors_selected.png");
    rules = loadImage("./images_escaperoomgame/room3_password/rules.png");
    last_door = loadImage("./images_escaperoomgame/last_room/last_door.jpg");
    rockSaltFont = loadFont("./fonts/poorich.ttf");

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
    
function draw() {
    background(0);

    if (scene == "MainScene") {
        drawMainScene();
    } else if (scene == "IntroScene") {
        drawIntroScene();
    } else if (scene == "PrologueScene") {
        drawPrologueScene();
    } else if (scene == "Room1Scene") { 
        drawRoom1Scene();
    } else if (scene == "PasswordScene") {
        drawPasswordScene();
    } else if (scene == "Room2Scene") {
        drawRoom2Scene();
    } else if (scene == "Password2Scene") {
        drawPassword2Scene();
    } else if (scene == "Password3Scene") {
        drawPassword3Scene();
    } else if (scene == "FinalResultScene") {
        drawFinalResultScene();
    } else if (scene == "GameOverScene") {
        drawGameOverScene();
    } else if (scene == "InfoBeforeRoom3") {
        drawInfoBeforeRoom3();
    } else if (scene == "LastRoom") {
        drawLastRoom();
    }
        
    if (frameCountInitial != 0) {
        transparency = 0;
        if (frameCount <= frameCountInitial + 5) {
            transparency = 255;
        } else if (frameCount > frameCountInitial + 5) {
            transparency = lerp(255, 0, 
                (frameCount - frameCountInitial - 5).toFixed(4)/(15).toFixed(4));
        }
        // saveButtonClicked(transparency)
    }
        
    if (frameCountFinal == frameCount) {
        frameCountInitial = 0;
        frameCountFinal = 0;
    }

}

function drawMainScene() {
    image(main_img, 0, 0, 1200, 800);
    textFont(font, 50);
    text("", 10, 50);
    image(start_button, 450, 380, 300, 100);
    image(load_button, 450, 500, 300, 100);
    image(exit_button, 450, 650, 300, 100);
    image(title, 250, 70, 700, 250);
    image(jessica, 1080, 150, 180, 660);
    // console.log(scene);
}

function drawIntroScene() {
    image(pasta_resto, 0, 0, 1200, 800);
}

function drawPrologueScene() {
    image(prologue, 0, 0, 1200, 800);
}

function mouseClicked() {
    
    volumeSystem = new p5.Amplitude();
    soundMainScene.play();
    volumeSystem.setInput(soundMainScene);
    console.log("Clicked!");
    
    let mX = mouseX;
    let mY = mouseY;
    
    if (scene == "MainScene") {
        if (450 < mX && mX < 750 && 380 < mY && mY < 480) {
            scene = "IntroScene";
        }
        if (450 < mX && mX < 750 && 500 < mY && mY < 600) {
            // loadDataFromFile()
        }
        if (450 < mX && mX < 750 && 650 < mY && mY < 750) {
            location.reload();
        }
    }
    else if (scene == "IntroScene") {
        scene = "PrologueScene";
    }
    else if (scene == "PrologueScene") {
        scene = "Room1Scene";
    }
    else if (scene == "Room1Scene" && (detectAreaWithCoordinates(335, 307, 443, 374, 425, 462, 314, 396,  mouseX, mouseY)) == true) {
        scene = "PasswordScene";
    }
    else if (scene == "PasswordScene") {
        if (passwordSceneState == 'FINISHED' && (detectAreaWithCoordinates(872, 382, 1142, 375, 1141, 480, 871, 486, mouseX, mouseY)) == true) {
            scene = "Room2Scene";
        }
    }
    else if (scene == "Room2Scene" && (detectAreaWithCoordinates(950, 372, 971, 373, 972, 409, 951, 414, mouseX, mouseY)) == true) {
            scene = "Password2Scene";
    }
    //else if scene == "Password2Scene":
    //      scene = "Room3Scene"
    else if (scene == "Password2Scene") {
        if (passwordScene2State == 'FOUR' && (detectAreaWithCoordinates(885, 367, 1085, 358, 1089, 431, 887, 425,  mouseX, mouseY)) == true) {
            scene = "InfoBeforeRoom3";
        }
    }
    else if (scene == "InfoBeforeRoom3") {
        scene = "Password3Scene";
    }
    else if (scene == "Password3Scene") {
        if (detectCircle(135, 690, 60, mX, mY) == true) {
            passwordScene3StateForPlayer = 'rock';
            computerPlay();
            rockPaperScissors();
            scene = "FinalResultScene";
        }
        else if (detectCircle(285, 690, 60, mX, mY) == true) {
            passwordScene3StateForPlayer = 'scissors' ;
            computerPlay();
            rockPaperScissors();
            scene = "FinalResultScene";
        }
            
    }
    else if (scene == "FinalResultScene") {
        if (passwordScene3GameResult == "CW") {
            scene = "GameOverScene";
            emptyString();
        }
        else if (passwordScene3GameResult == "PW") {
            scene = "LastRoom";
            emptyString();
        }
        else if (passwordScene3GameResult == "D") {
            scene = "Password3Scene";
            emptyString();
        }
    }
    else if (scene == "GameOverScene") {
        scene = "MainScene";
    }
    else if (scene == "LastRoom") {
        location.reload();
    }
    if (detectAreaWithCoordinates(1140, 740, 1190, 739, 1191, 789, 1141, 790,  mouseX, mouseY)) {
        frameCountInitial = frameCount;
        frameCountFinal = frameCountInitial + 20;
        // saveDataToFile();
    }
}


function saveDataToFile() {
    // saveData = [base64.encodestring(str(gameData.scene).encode('utf-8')).rstrip('\n'), 
    //     base64.encodestring(str(gameData.passwordSceneState.encode('utf-8'))).rstrip('\n'),
    //     base64.encodestring(str(gameData.passwordSceneStateForGameover).encode('utf-8')).rstrip('\n'),
    //     base64.encodestring(str(gameData.passwordScene2StateForGameover).encode('utf-8')).rstrip('\n'),
    //     base64.encodestring(str(gameData.passwordScene2State).encode('utf-8')).rstrip('\n'),
    //     base64.encodestring(str(gameData.passwordScene3StateForPlayer).encode('utf-8').rstrip('\n')),
    //     base64.encodestring(str(gameData.passwordScene3StateForComputer).encode('utf-8')).rstrip('\n'),
    //     base64.encodestring(str(gameData.passwordScene3GameResult).encode('utf-8')).rstrip('\n')
    //     ]
    // saveStrings("saveData.txt", saveData)

}

function loadDataFromFile() {
    // savedData = loadStrings("saveData.txt")
    // gameData.scene = base64.decodestring(savedData[0])
    // gameData.passwordSceneState = base64.decodestring(savedData[1])
    // gameData.passwordSceneStateForGameover = int(base64.decodestring(savedData[2]))
    // gameData.passwordScene2StateForGameover = int(base64.decodestring(savedData[3]))
    // gameData.passwordScene2State = base64.decodestring(savedData[4])
    // gameData.passwordScene3StateForPlayer = base64.decodestring(savedData[5])
    // gameData.passwordScene3StateForComputer = base64.decodestring(savedData[6])
    // gameData.passwordScene3GameResult = base64.decodestring(savedData[7])
}
   
function saveButtonClicked(transparency) {
    // textSize(200)
    // textAlign(CENTER, CENTER)
    // textFont(rockSaltFont)
    // fill(255, 8, 8, transparency)
    // text("SAVED", 600, 400)
    // print(gameData.frameCountInitial)
    // print(gameData.frameCountFinal)
}

function drawRoom1Scene() {
    textSize(32);
    fill(90, 80, 80);
    
    image(room1, 0, 0, 1200, 800);

    if (detectAreaWithCoordinates(335, 307, 443, 374, 425, 462, 314, 396,  mouseX, mouseY)) {
        text("go to the sea", 990, 30, 1200, 300);
    } else {
        cursor(ARROW);
    }
    if (detectAreaWithCoordinates(106, 63, 330, 107, 298, 254, 78, 203, mouseX, mouseY)) {
        image(letter, 0, 0, 1200, 800);
    }
    image(saveB, 1140, 740, 50, 50)
 
}    

function keyPressed() {
    
    if (scene == "MainScene") {
    }
    else if (scene == "IntroScene") {
    }    
    else if (scene == "PrologueScene") {
    }
    else if (scene == "Room1Scene") {
    }
    else if (scene == "PasswordScene") {
        passwordSceneStateForGameover += 1
        if (passwordSceneState == 'EMPTY' && key =='f') {
            passwordSceneState  = 'F_STATE'
        }
        else if (passwordSceneState  == 'F_STATE' && key == 'i') {
            passwordSceneState  = 'I_STATE'
        }
        else if (passwordSceneState  == 'I_STATE' && key == 's') {
            passwordSceneState  = 'S_STATE'
        }
        else if (passwordSceneState  == 'S_STATE' && key == 'h') {
            passwordSceneState  = 'FINISHED'
        }
    }    
    else if (scene == "Room2Scene") {
    }
    else if (scene == "Password2Scene"){
        passwordScene2StateForGameover += 1
        if (passwordScene2State == 'DEFAULT' && key =='1') {
            passwordScene2State  = 'ONE'
        }
        else if (passwordScene2State == 'ONE' && key == '3') {
            passwordScene2State  = 'TWO'
        }
        else if (passwordScene2State == 'TWO' && key == '4') {
            passwordScene2State  = 'THREE'
        }
        else if (passwordScene2State == 'THREE' && key == '2') {
            passwordScene2State  = 'FOUR'
        }
        else if (scene == "Room3Scene") {

        }
    }
    else if (scene == "Password3Scene") {
    }

}

function drawGameOverScene() {
    image(game_over, 0, 0, 1200, 800);
}

function drawPasswordScene() {
    image(PasswordScene, 0, 0, 1200, 800);
    textSize(64);
    if (passwordSceneStateForGameover > 10) {
        passwordSceneStateForGameover = 0;
        scene = "GameOverScene";
    }
    if (passwordSceneState == 'F_STATE') {
        image(fInserted, 0, 0, 1200, 800);
    }
    if (passwordSceneState == 'I_STATE') {
        image(iInserted, 0, 0, 1200, 800);
    }
    if (passwordSceneState == 'S_STATE') {
        image(sInserted, 0, 0, 1200, 800);
    }
    if (passwordSceneState == 'FINISHED') {
        image(hInserted, 0, 0, 1200, 800);
    }
 
}
                                                                                       
function drawRoom2Scene() {
    
    image(room2, 0, 0, 1200, 800);
    
    // print("x: " + str(mouseX) + " y: " + str(mouseY))
    if (detectAreaWithCoordinates(94, 129, 294, 188, 292, 339, 99, 351, mouseX, mouseY)) {
        image(hanja, width/2 - 200, height/2 - 200, 400, 400);
    }
    else if (detectAreaWithCoordinates(375, 190, 540, 228, 536, 325, 370, 334, mouseX, mouseY)){ 
        image(graph, width/2 - 300, height/2 - 300, 600, 600);
    }
    else if (detectAreaWithCoordinates(592, 243, 694, 269, 693, 328, 590, 335, mouseX, mouseY)) {
        image(pokemon, width/2 - 200, height/2 - 200, 400, 400);
    }
    else if (detectAreaWithCoordinates(400, 471, 623, 605, 618, 624, 394, 591, mouseX, mouseY)) {
        image(letter2, 0, 0, 1200, 800);
    }
    // else if (detectAreaWithCoordinates(950, 372, 971, 373, 972, 409, 951, 414, mouseX, mouseY)) {
    //     image(default, width/2 - 400, height/2 - 300, 800, 600)    
    //}   
    image(saveB, 1140, 740, 50, 50);
}


function drawPassword2Scene() {
    image(default_4_pw, 100, 95, 1000, 605);
    if (passwordScene2StateForGameover > 10) {
        passwordScene2StateForGameover = 0
        scene = "GameOverScene"
    }
    if (passwordScene2State == 'ONE') {
        image(one, 100, 95, 1000, 605);
    }   
    else if (passwordScene2State == 'TWO') {
        image(two, 100, 95, 1000, 605);
    }   
    else if (passwordScene2State == 'THREE') {
        image(three, 100, 95, 1000, 605);
    }     
    else if (passwordScene2State == 'FOUR') {
        image(four, 100, 95, 1000, 605);
    }    
        
}
        
function drawInfoBeforeRoom3() {
    image(InfoB4Room3, 0, 0, 1200, 800);
}


function findDistance(c1, c2, a, b) {
   distance = sqrt(sq(b - c2) + sq(a - c1))
   return (distance)
}
    
function detectCircle(c1, c2, r, a, b) {
    if (r < findDistance(c1, c2, a, b)) {
        return false;
    }
    if (r > findDistance(c1, c2, a, b)) {
        return true;
    }
}

function rockPaperScissors() {
    if (passwordScene3StateForPlayer == 'scissors' && passwordScene3StateForComputer == 'rock') {
        passwordScene3GameResult = "CW";
    }
    if (passwordScene3StateForPlayer == 'scissors' && passwordScene3StateForComputer == 'paper') {
        passwordScene3GameResult = "PW";
    }
    if (passwordScene3StateForPlayer == 'rock' && passwordScene3StateForComputer == 'rock') {
        passwordScene3GameResult = "D";
    }
    if (passwordScene3StateForPlayer == 'rock' && passwordScene3StateForComputer == 'paper') {
        passwordScene3GameResult = "CW";
    }

}

function drawPassword3Scene() {
    image(room3_password, 0, 0, 1200, 800);
    image(rock, 730, 110, 120, 120);
    image(paper, 880, 110, 120, 120);
    image(scissors, 1030, 110, 120, 120);
    image(rock, 80, 640, 120, 120);
    image(scissors, 230, 640, 120, 120);
    image(rules, 690, 445, 500, 350);

    list_computer = ['rock', 'paper'];

    if (passwordScene3StateForPlayer == 'scissors') {
        image(scissors_selected, 230, 640, 120, 120);
    }
        
    if (passwordScene3StateForPlayer == 'rock') {
        image(rock_selected, 80, 640, 120, 120);
    }
    image(saveB, 1140, 740, 50, 50);
}

function computerPlay() {
    random_number = floor(random(0, 2))
    computer_choice = ['rock', 'paper']
    
    passwordScene3StateForComputer = computer_choice[random_number]
}

function drawFinalResultScene() {

    textSize(200);
    textAlign(CENTER, CENTER);
    fill(255, 8, 8, 255);
    image(room3_password, 0, 0, 1200, 800);
    image(rock, 730, 110, 120, 120);
    image(paper, 880, 110, 120, 120);
    image(scissors, 1030, 110, 120, 120);
    image(rock, 80, 640, 120, 120);
    image(scissors, 230, 640, 120, 120);
    image(rules, 690, 445, 500, 350);
    
    if (passwordScene3StateForPlayer == 'scissors') {
        image(scissors_selected, 230, 640, 120, 120);
    }
    if (passwordScene3StateForPlayer == 'rock') {
        image(rock_selected, 80, 640, 120, 120);
    }
    if (passwordScene3StateForComputer == 'rock') {
        image(rock_selected, 730, 110, 120, 120);
    }
    if (passwordScene3StateForComputer == 'paper') {
        image(rock_selected, 880, 110, 120, 120);
    }
    if (passwordScene3GameResult == "D") {
        text("DRAW!", 600, 400);
        textSize(40);
        text("Click to Proceed", 600, 550);
    }
    else if (passwordScene3GameResult == "CW") {
        text("YOU LOSE!", 600, 400);
        textSize(40);
        text("Click to Proceed", 600, 550);
    } else if (passwordScene3GameResult == "PW") {
        text("YOU WIN!", 600, 400);
        textSize(40);
        text("Click to Proceed", 600, 550);
    }

}

function emptyString() {
    passwordScene3GameResult = ""
    passwordScene3StateForComputer = ""
    passwordScene3StateForPlayer = ""
}

function drawLastRoom() {
     image(last_door, 0, 0, 1200, 800);
}



