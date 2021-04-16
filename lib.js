document.onkeydown = checkButton;



function checkButton(event) {

    let cubeRight = cube.x + cube.width;
    let cubeBottom = cube.y + cube.height;

    let mapRight = map.x + map.width;
    let mapBottom = map.y + map.height;

    

    if (event.keyCode === 39) {
        console.log("ArrowRight");
        if (cubeRight < mapRight) {
            if ((mapRight - cubeRight) < cube.step) {
                cube.x += mapRight - cubeRight;
            }
            else {
                cube.x += cube.step;
            }
        }
    }

    if (event.keyCode === 37) {
        console.log("ArrowLeft");
        if (map.x < cube.x){
            if((cube.x - map.x) < cube.step) {
                cube.x -= cube.x - map.x;
            }

            else {
                cube.x -= cube.step;
            }
        }
        
    }

    if (event.keyCode === 38) {
        console.log("ArrowUp");
        if (map.y < cube.y) {
            if ((cube.y-map.y) < cube.step){
                cube.y -= cube.y - map.y;
            }

            else {
                cube.y -= cube.step;
            }
        }
        
    }

    if (event.keyCode === 40) {
        console.log("ArrowDown");
        if (cubeBottom < mapBottom) {
            if ((mapBottom - cubeBottom) < cube.step) {
                cube.y += mapBottom - cubeBottom;
            }
            else {
                cube.y += cube.step;
            }
        }
    }
    

    renderCube(cube);
}


function renderCube(cube) {
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.width = cube.width + 'px';
    document.getElementById(cube.id).style.height = cube.height + 'px';
    document.getElementById(cube.id).style.transition = 'ease ' + cube.trnstn + 's';
    document.getElementById(cube.id).style.backgroundColor = cube.color;
}

function renderCubeRed(cubeRed) {
    document.getElementById(cubeRed.id).style.top = cubeRed.y + 'px';
    document.getElementById(cubeRed.id).style.left = cubeRed.x + 'px';
    document.getElementById(cubeRed.id).style.width = cubeRed.width + 'px';
    document.getElementById(cubeRed.id).style.height = cubeRed.height + 'px';
    document.getElementById(cubeRed.id).style.backgroundColor = cubeRed.color;
}

function renderCubeGreen(cubeGreen) {
    document.getElementById(cubeGreen.id).style.top = cubeGreen.y + 'px';
    document.getElementById(cubeGreen.id).style.left = cubeGreen.x + 'px';
    document.getElementById(cubeGreen.id).style.width = cubeGreen.width + 'px';
    document.getElementById(cubeGreen.id).style.height = cubeGreen.height + 'px';
    document.getElementById(cubeGreen.id).style.backgroundColor = cubeGreen.color;
}

function renderMap(map) {
    document.getElementById('map').style.top = map.y + 'px';
    document.getElementById('map').style.left = map.x + 'px';
    document.getElementById('map').style.width = map.width + 'px';
    document.getElementById('map').style.height = map.height + 'px';
    document.getElementById('map').style.backgroundColor = map.color;
    // document.getElementById('map').style.border = '2px solid' + map.border;
}



function spawnMap (map, cube) {

    let mapMaxWidth = cube.step * 10;
    let mapMaxHeight = cube.step * 10;

    let mapMinWidth = cube.step * 4;
    let mapMinHeight = cube.step * 4;

    map.width =  Math.floor(Math.random() * (mapMaxWidth - mapMinWidth)) + mapMinWidth;
    map.height =  Math.floor(Math.random() * (mapMaxHeight - mapMinHeight)) + mapMinHeight;

    return map;

}

function spawnCube(map, cube) {

    let mapMinX = map.x;
    let mapMinY = map.y;

    let mapMaxX = map.x + map.width - cube.width;
    let mapMaxY = map.y + map.height - cube.height;

    cube.x = mapMinX + Math.random() * (mapMaxX - mapMinX); 
    cube.y = mapMinY + Math.random() * (mapMaxY - mapMinY);
    return cube;
}

function spawnCubeRed(map, cubeRed) {

    let mapMinX = map.x;
    let mapMinY = map.y;

    let mapMaxX = map.x + map.width - cubeRed.width;
    let mapMaxY = map.y + map.height - cubeRed.height;

    cubeRed.x = mapMinX + Math.random() * (mapMaxX - mapMinX); 
    cubeRed.y = mapMinY + Math.random() * (mapMaxY - mapMinY);
    return cubeRed;

}

function spawnCubeGreen(map, cubeGreen) {

    let mapMinX = map.x;
    let mapMinY = map.y;

    let mapMaxX = map.x + map.width - cubeGreen.width;
    let mapMaxY = map.y + map.height - cubeGreen.height;

    cubeGreen.x = mapMinX + Math.random() * (mapMaxX - mapMinX); 
    cubeGreen.y = mapMinY + Math.random() * (mapMaxY - mapMinY);
    return cubeGreen;
}
