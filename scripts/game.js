/* Name: Anita Chen, Date: 12/25/2019
game.js: This javascript file contains the game logic.
*/

// Initialize canvas and context
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
// Initialize page counter
var page = 0;
var loader = 0; // + 1 when images are loaded, 3 for all images loaded
var posx = 10; // cup position
var molangposy = 0; // molang y position
var interval1; // molang
var interval2; // cup

// Initialize images
var gamePage = new Image();
gamePage.onload = function() {
      // context.drawImage(gamePage, 0, 0);
      loader = loader + 1;
      console.log("done loading game page");
};
gamePage.src = '../mlcatch/images/gamepage.png';

var cup = new Image();
cup.onload = function() {
      // context.drawImage(cup, pos, 250, 150, 150);
      loader = loader + 1;
      console.log("done loading cup");
};
cup.src = '../mlcatch/images/cup.png';

var jia = new Image();
jia.onload = function() {
      // context.drawImage(cup, pos, 250, 150, 150);
      loader = loader + 1;
      // isLoaded(); // last image to load, so start game here
      console.log("done loading jia");
};
jia.src = '../mlcatch/images/jia.png';

// Draws the Loading Page
function drawLoadingPage()
{
  var loading = new Image();
  loading.onload = function() {
        context.drawImage(loading, 0, 0);
  };
  loading.src = '../mlcatch/images/loadingpage.png';
}

// Draws the Home Page
function drawHomePage()
{
  var home = new Image();
  home.onload = function() {
        context.drawImage(home, 0, 0);
  };
  home.src = '../mlcatch/images/startscreen.png';
  page = 0; // home page
  alert("home page");
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
  context.drawImage(gamePage, 0, 0);
  page = 4; // game background
  // alert("draw about page");
}

// Draws the cup
function drawCup()
{
  context.drawImage(cup, posx, 225, 150, 150);
  console.log("drew cup at " + posx);
}

function drawMolang()
{
  context.drawImage(jia, 0, molangposy, 100, 100);
  molangposy = molangposy + 5;
}

function clear()
{
  context.clearRect(0, 0, 600, 450);
}

function update()
{
  if (page = 4)
  {
    clear();
    drawGamePage();
    drawMolang();
    drawCup();
    console.log(page);
  }
}

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
        interval1 = setInterval(drawMolang, 20);
        interval2 = setInterval(update, 20);
      }
      else if (page == 4) // Game screen: Press UP to go home
      {
        page = 0;
        clear();
        clearInterval(interval1);
        clearInterval(interval2);
        alert("cleared" + page);
        drawHomePage();
        posx = 10;
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
    else if (e.key === "ArrowLeft")
    {
      e.preventDefault();
      if (page == 4)
      {
        posx = posx - 10;
        console.log(page + "left" + posx);
        // setInterval(update, 20);
      }
    }
    else if (e.key === "ArrowRight")
    {
      e.preventDefault();
      if (page == 4)
      {
        posx = posx + 10;
        console.log(page + "right" + posx);
        // setInterval(update, 20);
      }
    }
  })
}

/*
function isLoaded()
{
  if (loader == 3)
  {
    startGame();
  }
}
*/

// Starts the game
drawLoadingPage();
// gives enough time to load
setTimeout(startGame, 1000);


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
