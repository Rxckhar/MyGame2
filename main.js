let cube = {
    id: 'cube',
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: 'black'
}

let cubeRed = {
    id: 'cubeRed',
    x: 0,
    y: 0,
    width: 13,
    height: 13,  
    spawn: 0,
    color: 'red'
}

let cubeGreen = {
    id: 'cubeGreen',
    x: 0,
    y: 0,
    width: 13,
    height: 13,
    spawn: 0,
    color: 'green'
}

let map = {
    x: 110,
    y: 110,
    width: 0,
    height: 0,
    color: '#a2a0a0',
    border: '#f1f1f1'
}



renderMap(spawnMap (map, cube));

renderCubeRed(spawnCubeRed(map, cubeRed));

renderCubeGreen(spawnCubeGreen(map, cubeGreen));

renderCube(spawnCube(map, cube));

