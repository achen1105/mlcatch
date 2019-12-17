// http://dev.bennage.com/blog/2013/01/11/game-dev-02/

/* var currentScreen = 0;
var molangHug = getImage("images/molanghug");

var drawButton = function()
{
  fill(81, 166, 31);
  rect(340, 10, 50, 25);
  fill(255, 255, 255);
  textSize(16);
  text("NEXT", 344, 29);
}

var drawScreen1 = function()  start screen
{
  currentScreen = 1;
  background(200, 175, 175);
  image(molangHug, 50, 200);
}


create button
var btn1 = new Button ({
    x: 350,
    y: 350,
    width: 80,
    height: 50,
    color: color(222, 173, 222),
    label: "Start"
});
*/

// Initialize myCanvas
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
/*
var home = new Image();
home.src = '../mlarcade/images/home.png';
var start = new Image();
start.src = '../mlarcade/images/start.png';
var instructions = new Image();
instructions.src = '../mlarcade/images/instructions.png';
var about = new Image();
about.src = '../mlarcade/images/about.png';
var credits = new Image();
credits.src = '../mlarcade/images/credits.png';
var settings = new Image();
settings.src = '../mlarcade/images/settings.png';

function isLoaded()
{
  if (home.isLoaded)
  {
    return true;
  }
}
*/

function drawButton(buttonName = "", posx = 350, posy = 350, width = 100, height = 50)
{
  context.beginPath();
  context.fillStyle = "#FFAFC4";
  context.rect(posx, posx, width, height);
  context.fill();
  context.closePath();

  context.beginPath();
  context.fillStyle = "#FFFFFF";
  context.font = '48px serif';
  context.fillText(buttonName, posx + 10, posy + 10);
  context.closePath();
}

function drawAboutPage()
{
  var aboutPage = new Image();
  aboutPage.onload = function() {
        context.drawImage(aboutPage, 0, 0);
  };
  aboutPage.src = '../mlarcade/images/aboutpage.png';
  alert("draw about page");
}

function startGame()
{
  // create game space
  context.beginPath();
  context.fillStyle = "#FFEBEF";
  context.fillRect(0, 0, 800, 600);
  context.closePath();

  // home background
  var home = new Image();
  home.onload = function() {
        context.drawImage(home, 0, 0);
  };
  home.src = '../mlarcade/images/home.png';
  home.onclick = function(){
    drawAboutPage();
  };


  // start button, 300*100
var start = new Image();
  start.onload = function() {
        context.drawImage(start, 250, 300, 300, 100);
  };
  start.src = '../mlarcade/images/start.png';

  // instructions button, 300 * 50
var instructions = new Image();
  instructions.onload = function() {
        context.drawImage(instructions, 250, 425, 300, 50);
  };
  instructions.src = '../mlarcade/images/instructions.png';

  // about button, 130 * 50
  var about = new Image();
  about.onload = function() {
        context.drawImage(about, 250, 525, 130, 50);
  };
  about.src = '../mlarcade/images/about.png';
  about.onclick = function(){
    drawAboutPage();
  };

  // credits button, 130 * 50
var credits = new Image();
  credits.onload = function() {
        context.drawImage(credits, 420, 525, 130, 50);
  };
  credits.src = '../mlarcade/images/credits.png';

  // settings button, 150 * 50
  var settings = new Image();
  settings.onload = function() {
        context.drawImage(settings, 600, 25, 150, 50);
  };
  settings.src = '../mlarcade/images/settings.png';


  // drawButton("Start");
  //drawButton("Credits", 30, 120, 100, 50);

  // fake button
  /*
  var img = new Image();   // Create new img element
  img.onload = function() {
        context.drawImage(img, 350, 420, 200, 150);
  };
  img.src = '../mlarcade/images/tontonchristmas2017 copy.png';
  */
}

startGame();

// please work
