(function(isometric) {

    var map = [];
    const MAX_FIELD = 6;

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const NUMBERS_ARRAY_LENGTH = 16
    const SUB_LENGTH = 16

 /*   for (let i = 0; i < MAX_FIELD; i++) {
        const sub = []
        for (let j = 0; j < MAX_FIELD; j++) {
            sub.push(getRandomInt(0,15));
        }
        map.push(sub)
    }*/
    map = [
        [1, 1,  1,  1,  1,  1,  1,  10,  13,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [1, 1,  1,  1,  1,  1,  1,  1,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [1, 1,  1,  1,  1,  1,  1,  1,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [1, 1,  1,  1,  1,  1,  1,  1,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [1, 1,  1,  1,  1,  1,  1,  1,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [1, 1,  1,  1,  1,  1,  1,  1,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [1, 1,  1,  1,  1,  1,  1,  1,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [1, 1,  1,  1,  1,  1,  1,  1,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [1, 1,  1,  1,  1,  1,  1,  1,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [1, 1,  1,  1,  1,  1,  1,  1,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [1, 1,  1,  1,  1,  1,  1,  1,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [1, 8,  5,  5,  5,  5,  9,  1,  10,  7,  7,  7,  7,  7,  13,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [9, 10,  13,  0,  0,  0,  6,  1,  1,  1,  1,  1,  1,  1,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [14, 9,  10,  13,  0,  0,  14,  9,  1,  1,  1,  1,  1,  1,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0, 6,  1,  10,  7,  7,  7,  11,  1,  1,  1,  1,  1,  1,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0, 6,  1,  1,  1,  1,  1,  1,  1,  1,  1,  8,  5,  5,  15,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0, 6,  1,  1,  1,  1,  1,  1,  1,  1,  1,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0, 14,  5,  5,  9,  1,  1,  1,  1,  1,  1,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0, 0,  0,  0,  6,  1,  1,  1,  1,  1,  1,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0, 0,  0,  0,  6,  1,  1,  1,  1,  1,  1,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [7, 7,  7,  7,  11,  1,  1,  1,  1,  1,  1,  10,  7,  7,  7,  7,  7,  7,  7,  7,  13,  0,  0,  0],
        [1, 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  4,  0,  0,  0],
        [1, 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  4,  0,  0,  0],
        [1, 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  4,  0,  0,  0],
        [1, 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  4,  0,  0,  0],
    ]
    const tileGraphics = [];


function loadImg() {
    const PfadZuTiles = "assets/img/map/";

    let tileGraphicsToLoad = [
        PfadZuTiles + "water.png", //0
        PfadZuTiles + "grass_default.png", //1
        PfadZuTiles + "grass_flowers.png", //2
        PfadZuTiles + "grass_tall.png", //3
        PfadZuTiles + "coast_1.png", //4
        PfadZuTiles + "coast_2.png", //5
        PfadZuTiles + "coast_3.png", //6
        PfadZuTiles + "coast_4.png", //7
        PfadZuTiles + "coast_corner_1.png", //8
        PfadZuTiles + "coast_corner_2.png", //9
        PfadZuTiles + "coast_corner_3.png", //10
        PfadZuTiles + "coast_corner_4.png", //11
        PfadZuTiles + "coast_corner_5.png", //12
        PfadZuTiles + "coast_corner_6.png", //13
        PfadZuTiles + "coast_corner_7.png", //14
        PfadZuTiles + "coast_corner_8.png"], //15
    tileGraphicsLoaded = 0;

    for (let i = 0; i < tileGraphicsToLoad.length; i++) {
    tileGraphics[i] = new Image();
    tileGraphics[i].src = tileGraphicsToLoad[i];
        tileGraphics[i].onload = function() {
        // Once the image is loaded increment the loaded graphics count and check if all images are ready.
        tileGraphicsLoaded++;
                if (tileGraphicsLoaded === tileGraphicsToLoad.length) {
                    drawMap();
                }
        }
    }

}


function drawMap() {

// create the canvas context
const ctx = document.getElementById('worldmap').getContext('2d');

// Set as your tile pixel sizes, alter if you are using larger tiles.
const tileH = 76;
const tileW = 151;

// mapX and mapY are offsets to make sure we can position the map as we want.
const mapX = 1800; //links rechts
const mapY = 0; //hoch runter

let drawTile;

// loop through our map and draw out the image represented by the number.
for (let i = 0; i < map.length; i++) {
for (let j = 0; j < map[i].length; j++) {
drawTile = map[i][j];
// Draw the represented image number, at the desired X & Y coordinates followed by the graphic width and height.
ctx.drawImage(tileGraphics[drawTile], (i - j) * tileH + mapX, (i + j) * tileH / 2 + mapY);
}
}
}

function init() {
// Remove Event Listener and load images.
isometric.removeEventListener('load', init);
loadImg();
};

// Add Event Listener to dectect when page has fully loaded.
isometric.addEventListener('load', init, false);

})(this);