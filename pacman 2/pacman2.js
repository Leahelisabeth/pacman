
var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
    [2, 0, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3, 2],
    [2, 2, 3, 2, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    //2 = brick; 1 = coin; 3 = fruit; 0 = empty

];
var lives = 3;

var pacman = {
    x: 1,
    y: 1
};
var ghosts = {
    x: 13,
    y: 1
};

var tile = chooseTargettile(pacman)
var score = 0;

function displayworld() {
    var output = '';

    for (var i = 0; i < world.length; i++) {
        output += "\n<div class ='row'>";
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] == 2)
                output += "<div class='brick'></div>";

            else if (world[i][j] == 1)
                output += "<div class='coin'></div>";
            else if (world[i][j] == 3)
                output += "<div class='fruit'></div>";

            if (world[i][j] == 0)
                output += "<div class='empty'></div>";

        }
        output += "\n</div>";
    }
    document.getElementById('world').innerHTML = output;
}
function displaypacman() {
    document.getElementById('pacman').style.top = pacman.y * 20 + "px";
    document.getElementById('pacman').style.left = pacman.x * 20 + "px";
}
function displayghosts() {
    document.getElementById('ghosts').style.top = ghosts.y * 20 + "px";
    document.getElementById('ghosts').style.left = ghosts.x * 20 + "px";
}
function chooseTargettile() {
    do {
        tile = {
            x: (Math.floor(Math.random() * 5))-3 + pacman.x,//if we subtract three we are not just only having 
            //ghost on the right. if ghost has 5 spaces he can be and pacman is in one of those, 
            //if you subtract 3 it gives you ghost on left side as a possiblity for when random # is 0.
            //same for up down with ghost y
            y: (Math.floor(Math.random() * 5))-3 + pacman.y
        };
        if(tile.x < 0) {//ghost stays on screen even if not in matrix)
            tile.x=0;
        }
        if (tile.x > world[0].length){
            tile.x=world[0].length;
        }
        if(tile.y <0){//this way ghost cant go to impossible off screen place
            tile.y=0;
        }
        if (tile.y > world.length){
            tile.y=world.length;
        }
    } while (world[tile.y][tile.x] == 2)
    console.log('tile has a ' + world[tile.y][tile.x])
}

function moveghosttotile () {

if (ghosts.x == tile.x && ghosts.y == tile.y){
    chooseTargettile();
}

    if (ghosts.x > tile.x) {
        ghosts.x--;
    }
    else if (ghosts.x < tile.x) {
        ghosts.x++;
    }
    if (ghosts.y > tile.y) {
        ghosts.y--;
    }
    else if (ghosts.y < tile.y) {
        ghosts.y++;

    }
    console.log("ghost at ", ghosts);
}
function displaylives(){
    document.getElementById('lives').innerHTML = lives;
}

function displayscore() {
    document.getElementById('score').innerHTML = score;

}


displayworld();
displaypacman();
displayghosts();
chooseTargettile();
displaylives();
displayscore();


document.onkeydown = function (e) {
    if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2) {
        pacman.x--;
    }
    else if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2) {
        pacman.x++;
    }
    else if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2) {
        pacman.y--;
    }
    else if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2) {
        pacman.y++;
    }
    if (world[pacman.y][pacman.x] == 1) {
        world[pacman.y][pacman.x] = 0;
        score += 10;
        displayworld()
        displayscore()
    }
    else if (world[pacman.y][pacman.x] == 3) {
        world[pacman.y][pacman.x] = 0;
        score += 50;
        displayworld()
        displayscore()
    }
    else if (pacman.y == ghosts.y && pacman.x == ghosts.x ){
        score-= 50;
        lives--;
        displayscore()
        displaylives()
    }
    if (lives == 0){
        alert('game over');
    }
    displaypacman()
    moveghosttotile()
    displayghosts()
}