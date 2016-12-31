//world is an array of 0-5 containing arrays from 0-14
// var world = [
//     [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],//0
//     [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],//1
//     [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],//2
//     [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],//3
//     [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],//4
//     [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]//5
// ];


function targettile(pacman) {
    var tile = {
        x: (Math.floor(Math.random() * 5)) + pacman.x,
        y: (Math.floor(Math.random() * 5)) + pacman.y
    };
    console.log(tile)
return tile;
}
function moveghosttotile (ghost, tile) {
    if (ghost.x > tile.x) {
        ghost.x--;
    }
    else if (ghost.x < tile.x) {
        ghost.x++;
    }
    if (ghost.y > tile.y) {
        ghost.y--;
    }
    else if (ghost.y < tile.y) {
        ghost.y++;

    }
    return ghost;
}
    console.log(ghost);
    //console.log([ghost.y], [ghost.x])



//console.log([targettile.x], [targettile.y]);

targettile(
    pacman = {
        x: 3,
        y: 5
    },
    ghost = {
        x: 5,
        y: 9
    }
)

