
let scene = "MainScene"; 


function setup() {

    frameRate(24);
    createCanvas(1200, 800);
    


    //main:
    mainbg = loadImage("./images_cyberlifegame/main.png");
    //start
    startbg = loadImage("./images_cyberlifegame/start.png");
    //scene1
    scene1bg = loadImage("./images_cyberlifegame/scene1.png");
    scene1endbg = loadImage("./images_cyberlifegame/scene1_end.png");
    //scene2
    scene2bg = loadImage("./images_cyberlifegame/scene2.png");
    scene2endbg = loadImage("./images_cyberlifegame/scene2_end.png");
    //bonus 1
    bonus1bg = loadImage("./images_cyberlifegame/bonus1.png");
    bonus1_end = loadImage("./images_cyberlifegame/bonus1_end.png");
    //scene 3
    scene3bg = loadImage("./images_cyberlifegame/scene3.png");
    scene3Winendbg = loadImage("./images_cyberlifegame/scene3_winend.png");
    scene3Loseendbg = loadImage("./images_cyberlifegame/scene3_loseend.png");
    scene3Loseendbg1 = loadImage("./images_cyberlifegame/scene3_loseend1.png");
    //scene4
    scene4bg = loadImage("./images_cyberlifegame/scene4.png");
    scene4endbg = loadImage("./images_cyberlifegame/scene4_end.png");
    //scene5
    scene5bg = loadImage("./images_cyberlifegame/scene5.png");
    scene5endbg = loadImage("./images_cyberlifegame/scene5_end.png");
    
    //last scenes
    sceneWin = loadImage("./images_cyberlifegame/winEnd.png");
    sceneLose = loadImage("./images_cyberlifegame/loseEnd.png");
    //bonus 2
    bonus2bg = loadImage("./images_cyberlifegame/bonus2.png");
    bonus2_end = loadImage("./images_cyberlifegame/bonus2_end.png");

}

function draw() {
    background(0);

 

    if (scene == "MainScene") {
        drawMainScene();
    } else if (scene == "StartScene") {
        drawStartScene();
    } else if (scene == "Scene1") {
        drawScene1();
    } else if (scene == "Scene1End") {
        drawScene1End();
    } else if (scene == "Scene2") {
        drawScene2();
    } else if (scene == "Scene2End") {
        drawScene2End();
    } else if (scene == "Bonus1") {
        drawBonus1();
    } else if (scene == "Bonus1End") {
        drawBonus1End();
    } else if (scene == "Scene3") {
        drawScene3();
    } else if (scene == "scene3Loseendbg") {
        drawScene3LoseEnd();
    } else if (scene == "scene3Loseendbg1") {
        drawScene3LoseEnd1();
    } else if (scene == "scene3Winendbg") {
        drawScene3WinEnd();
    } else if (scene == "Scene4") {
        drawScene4();
    } else if (scene == "Scene4End") {
        drawScene4End();
    } else if (scene == "Scene5") {
        drawScene5();
    } else if (scene == "Scene5End") {
        drawScene5End();
    } else if (scene == "EndWin") {
        drawSceneEndWin();
    } else if (scene == "EndLose") {
        drawSceneEndLose();
    } else if (scene == "Bonus2") {
        drawBonus2();
    } else if (scene == "Bonus2End") {
        drawBonus2End();
    }



        

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

function drawMainScene() {
    image(mainbg, 0, 0, 1200, 800);
    
}

function drawStartScene() {
    image(startbg, 0, 0, 1200, 800);
}

function drawScene1() {
    image(scene1bg, 0, 0, 1200, 800);
}

function drawScene1End() {
    image(scene1endbg, 0, 0, 1200, 800);
}

function drawScene2() {
    image(scene2bg, 0, 0, 1200, 800);
}

function drawScene2End() {
    image(scene2endbg, 0, 0, 1200, 800);
}


function drawBonus1() {
    image(bonus1bg, 0, 0, 1200, 800);
}

function drawBonus1End() {
    image(bonus1_end, 0, 0, 1200, 800);
}

function drawScene3() {
    image(scene3bg, 0, 0, 1200, 800);
}

function drawScene3End() {
    image(scene3endbg, 0, 0, 1200, 800);
}

function drawScene3LoseEnd() {
    image(scene3Loseendbg, 0, 0, 1200, 800);
}

function drawScene3LoseEnd1() {
    image(scene3Loseendbg1, 0, 0, 1200, 800);
}
function drawScene3WinEnd() {
    image(scene3Winendbg, 0, 0, 1200, 800);
}

function drawScene4() {
    image(scene4bg, 0, 0, 1200, 800);
}

function drawScene4End() {
    image(scene4endbg, 0, 0, 1200, 800);
}

function drawScene5() {
    image(scene5bg, 0, 0, 1200, 800);
}

function drawScene5End() {
    image(scene5endbg, 0, 0, 1200, 800);
}

function drawSceneEndWin() {
    image(sceneWin, 0, 0, 1200, 800);
}

function drawSceneEndLose() {
    image(sceneLose, 0, 0, 1200, 800);
}

function drawBonus2() {
    image(bonus2bg, 0, 0, 1200, 800);
}

function drawBonus2End() {
    image(bonus2_end, 0, 0, 1200, 800);
}

function mouseClicked() {
    



    
    let mX = mouseX;
    let mY = mouseY;

    console.log(mX);
    console.log(mY);

    if (scene == "MainScene" && (detectAreaWithCoordinates(390, 493, 790, 491, 803, 627, 392, 625,  mouseX, mouseY)) == true) {
        scene = "StartScene";
        
    } else if (scene == "StartScene"& (detectAreaWithCoordinates(1048, 663, 1160, 660, 1161, 767, 1049, 786,  mouseX, mouseY)) == true) {
        scene = "Scene1";
    } else if (scene == "Scene1"& (detectAreaWithCoordinates(737, 521, 1142, 514, 1144, 585, 739, 581,  mouseX, mouseY)) == true) {
        scene = "Scene1End";
    } else if (scene == "Scene1End"& (detectAreaWithCoordinates(1045, 657, 1160, 664, 1161, 767, 1050, 768,  mouseX, mouseY)) == true) {
        scene = "Scene2";
    } else if (scene == "Scene2"& (detectAreaWithCoordinates(752, 260, 1151, 259, 1159, 333, 757, 334,  mouseX, mouseY)) == true) {
        scene = "Scene2End";
    } else if (scene == "Scene2End"& (detectAreaWithCoordinates(1045, 657, 1160, 664, 1161, 767, 1050, 768,  mouseX, mouseY)) == true) {
        scene = "Bonus1";
    } else if (scene == "Bonus1"& (detectAreaWithCoordinates(643, 481, 1151, 479, 1159, 606, 639, 607,  mouseX, mouseY)) == true) {
        scene = "Bonus1End";
    } else if (scene == "Bonus1End"& (detectAreaWithCoordinates(1045, 657, 1160, 664, 1161, 767, 1050, 768,  mouseX, mouseY)) == true) {
        scene = "Scene3";
    } else if (scene == "Scene3"& (detectAreaWithCoordinates(753, 502, 1153, 499, 1158, 593, 756, 592,  mouseX, mouseY)) == true) {
        scene = "scene3Winendbg";
    } else if (scene == "Scene3"& (detectAreaWithCoordinates(758, 384, 1157, 378, 1161, 466, 760, 472,  mouseX, mouseY)) == true) {
        scene = "scene3Loseendbg";
    } else if (scene == "Scene3"& (detectAreaWithCoordinates(758, 257, 1157, 258, 1161, 352, 760, 355,  mouseX, mouseY)) == true) {
        scene = "scene3Loseendbg1";
    //route to win
    } else if (scene == "scene3Winendbg"& (detectAreaWithCoordinates(1045, 657, 1160, 664, 1161, 767, 1050, 768,  mouseX, mouseY)) == true) {
        scene = "Scene4";
    } else if (scene == "Scene4"& (detectAreaWithCoordinates(756, 378, 1154, 381, 1155, 487, 760, 490,   mouseX, mouseY)) == true) {
        scene = "Scene4End";
    } else if (scene == "Scene4End"& (detectAreaWithCoordinates(1045, 657, 1160, 664, 1161, 767, 1050, 768,  mouseX, mouseY)) == true) {
        scene = "Scene5";
    } else if (scene == "Scene5" & (detectAreaWithCoordinates(33, 331, 432, 337, 434, 415, 32, 416, mouseX, mouseY)) == true) {
        scene = "Scene5End";
    } else if (scene == "Scene5End" & (detectAreaWithCoordinates(1045, 657, 1160, 664, 1161, 767, 1050, 768,  mouseX, mouseY)) == true) {
        scene = "EndWin";
 

    //route to lose

    } else if (scene == "scene3Loseendbg"& (detectAreaWithCoordinates(1045, 657, 1160, 664, 1161, 767, 1050, 768,  mouseX, mouseY)) == true) {
        scene = "Bonus2";
    } else if (scene == "Bonus2"& (detectAreaWithCoordinates(641, 332, 1159, 329, 1157, 446, 642, 447,  mouseX, mouseY)) == true) {
        scene = "Bonus2End";
    } else if (scene == "Bonus2End" & (detectAreaWithCoordinates(1045, 657, 1160, 664, 1161, 767, 1050, 768,  mouseX, mouseY)) == true) {
        scene = "EndLose";
    

    //route to lose 


    } else if (scene == "scene3Loseendbg1"& (detectAreaWithCoordinates(1045, 657, 1160, 664, 1161, 767, 1050, 768,  mouseX, mouseY)) == true) {
        scene = "Bonus2";
    } else if (scene == "Bonus2"& (detectAreaWithCoordinates(641, 332, 1159, 329, 1157, 446, 642, 447,  mouseX, mouseY)) == true) {
        scene = "Bonus2End";
    } else if (scene == "Bonus2End" & (detectAreaWithCoordinates(1045, 657, 1160, 664, 1161, 767, 1050, 768,  mouseX, mouseY)) == true) {
        scene = "EndLose";
    }
    

}