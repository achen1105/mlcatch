/* Name: Anita Chen, Date: 12/25/2019
game.js: This javascript file contains the game logic.
*/

// Initialize canvas and context
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
// Initialize page counter
var page = 0;
// Clear and update game screen 50 times per second
// var interval = setInterval(updateGameArea, 20);

// Draws the Home Page
function drawHomePage()
{
  var home = new Image();
  home.onload = function() {
        context.drawImage(home, 0, 0);
  };
  home.src = '../mlcatch/images/startscreen.png';
  page = 0; // home page
}

// Draws the About Page
function drawAboutPage()
{
  var aboutPage = new Image();
  aboutPage.onload = function() {
        context.drawImage(aboutPage, 0, 0);
  };
  aboutPage.src = '../mlcatch/images/aboutpage.png';
  page = 1; // about page
  // alert("draw about page");
}

// Draws the Instructions Page
function drawInstructionsPage()
{
  var instructionsPage = new Image();
  instructionsPage.onload = function() {
        context.drawImage(instructionsPage, 0, 0);
  };
  instructionsPage.src = '../mlcatch/images/instructionspage.png';
  page = 2; // instructions page
  // alert("draw about page");
}

// Draws the Credits Page
function drawCreditsPage()
{
  var creditsPage = new Image();
  creditsPage.onload = function() {
        context.drawImage(creditsPage, 0, 0);
  };
  creditsPage.src = '../mlcatch/images/creditspage.png';
  page = 3; // credits page
  // alert("draw about page");
}

// Draws the game background
function drawGamePage()
{
  var gamePage = new Image();
  gamePage.onload = function() {
        context.drawImage(gamePage, 0, 0);
  };
  gamePage.src = '../mlcatch/images/gamepage.png';

  // drawCup();

  page = 4; // game background
  // alert("draw about page");
}

// Draws the cup
function drawCup(posx = 10)
{
  var cup = new Image();
  cup.onload = function() {
        context.drawImage(cup, posx, 250, 150, 150);
  };
  cup.src = '../mlcatch/images/cup.png';
}

/*
function clear()
{
  context.clearRect(0, 0, 600, 450);
}

function update(newpos = 10)
{
  drawGamePage();
  drawCup(newpos);
}

function updateGameArea()
{
  if (page = 4)
  {
    clear();
    update();
  }
}
*/

// Starts the game
function startGame()
{
  // create game space
  context.beginPath();
  context.fillStyle = "#FFEBEF";
  context.fillRect(0, 0, 800, 600);
  context.closePath();

  // Draw the home page
  drawHomePage();

  window.addEventListener('keydown', function (e)
  {
    if (e.key === "ArrowUp")
    {
      // alert("up");
      e.preventDefault();

      if (page == 0) // Home: Press UP to start
      {
        drawInstructionsPage();
      }
      else if (page == 1) // About: Press UP to go home
      {
        drawHomePage();
      }
      else if (page == 2) // Instructions: Press UP to go to game background
      {
        drawGamePage();
      }
      else if (page == 4) // Game screen: Press UP to go home
      {
        drawHomePage();
      }
    }
    else if (e.key === "ArrowDown")
    {
      // alert("down");
      e.preventDefault();
      if (page == 0) // Home: Press DOWN to go to about
      {
        drawAboutPage();
      }
    }
    /*
    else if (e.key === "ArrowLeft")
    {
      // alert("down");
      e.preventDefault();
      if (page == 4) // Home: Press DOWN to go to about
      {
        updateGameArea();
      }
    }
    else if (e.key === "ArrowRight")
    {
      // alert("down");
      e.preventDefault();
      if (page == 4) // Home: Press DOWN to go to about
      {
        updateGameArea();
      }

    }
    */
  })
}

// Starts the game
startGame();

/*
window.addEventListener('keypress', function (e) {
  if (e.key === " ")
  {
    alert("space");
  }
  else if (e.key === "a")
  {
    alert("a");
  }
})
*/
