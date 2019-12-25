/* Name: Anita Chen, Date: 12/25/2019
game.js: This javascript file contains the game logic.
*/

// Initialize canvas and context
var myGamePiece;
var jia = new Image();
jia.onload = function() {
      // context.drawImage(cup, pos, 250, 150, 150);
      // isLoaded(); // last image to load, so start game here
      console.log("done loading jia");
};
jia.src = '../mlcatch/images/jia.png';

function startGame() {
  myGameArea.start();
  myGamePiece = new component(jia, 0, 0, 100, 100);
}

var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 600;
    this.canvas.height = 450;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  }
}

function component(img, x, y, width, height) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  ctx = myGameArea.context;
  ctx.drawImage(img, this.x, this.y, this.width, this.height);
  console.log("drew jia");
}


startGame();

/*
var isDrawn = 0;
for (j = 0; j < molangposy.length; j++)
{
  if (molangposy[j] == 500 || molangposy[j] == 475)
  {
    isDrawn++;
  }
}

if (isDrawn == molang.length)
{
  var k;
  for (k = 0; k < molangposx.length; k++)
  {
    molangposx[k] = 50 + 25 * (Math.floor(Math.random() * 20));
  }
  var l;
  for (l = 0; l < molangposy.length; l++)
  {
    molangposy[l] = -10 + -1 * (Math.random() * 50) * 10;
  }
}
*/
