/* Name: Anita Chen, Date: 12/25/2019
game.js: This javascript file contains the game logic.
*/

// Initialize canvas and context
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
// Initialize page counter
var page = 0;
var loader = 0; // + 1 when images are loaded, 3 for all images loaded
var posx = 250; // cup position
// var molangposy = 0; // molang y position
var interval1; // molang
var interval2; // cup
var interval3; // send molang
var molangposx = [0, 30, 60, 90, 120,
  150, 180, 210, 240, 270,
  300, 330, 360, 390, 420,
  450, 480, 510, 540, 570]; // 20
var x;
for (x = 0; x < molangposx.length; x++)
{
  molangposx[x] = 50 + 25 * (Math.floor(Math.random() * 20));
}
var molangposy = [0, 0, 0, 0, 0,
   0, 0, 0, 0, 0,
   0, 0, 0, 0, 0,
   0, 0, 0, 0, 0]; // 20
var y;
for (y = 0; y < molangposy.length; y++)
{
  molangposy[y] = -1 * Math.floor(Math.random() * 50) * 30;
}

var status = [false, false, false, false, false];
var score = 0;
var lives = 3;

var sound = new Audio("images/mlsong.mp3");
 sound.preload = 'auto';
 sound.load();
 sound.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

// Initialize images
var gamePage = new Image();
gamePage.onload = function() {
      // context.drawImage(gamePage, 0, 0);
      loader = loader + 1;
      console.log("done loading game page");
};
gamePage.src = '../mlcatch/images/gamepage.png';

var endPage = new Image();
endPage.onload = function() {
  loader = loader + 1;
  console.log("done loading end page");
};
  endPage.src = '../mlcatch/images/endpage.png';

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

var molang = [jia, jia, jia, jia, jia];
  /*
  jia, jia, jia, jia, jia,
  jia, jia, jia, jia, jia,
  jia, jia, jia, jia, jia];
*/

// Draws the Loading Page
function drawLoadingPage()
{
  var loading = new Image();
  loading.onload = function() {
        context.drawImage(loading, 0, 0);
  };
  loading.src = '../mlcatch/images/loadingpage.png';
}

// Draws the Loading Page
function drawLoadingPage2()
{
  var loading2 = new Image();
  loading2.onload = function() {
        context.drawImage(loading2, 0, 0);
  };
  loading2.src = '../mlcatch/images/loadingpage2.png';
  page = 6;
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
  console.log("home page");
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

// Draws the ending screen
function drawEndPage()
{
  context.drawImage(endPage, 0, 0);
  page = 5; // credits page
  console.log("draw end page");
}

// Draws the cup
function drawCup()
{
  context.drawImage(cup, posx, 225, 150, 150);
  // console.log("drew cup at " + posx);
}

function checkCup(num = 0) // true if the cup is in the path of the molang
{
  if (molangposy[num] > 220 && molangposy[num] <= 250 && molangposx[num] >= posx && molangposx[num] <= posx + 100)
  {
    // score = score + 1;
    // console.log("score" + score);
    status[num] = true;
    return true;
  }
  else
  {
    status[num] = false;
    return false;
  }
}

function updateScore(num = 0)
{

  if (molangposy[num] == 500) // got caught
  {
    score = score + 1;
  }
  else if(molangposy[num] == 475) // didn't get caught
  {
    lives = lives - 1;

    if (lives <= 0)
    {
      setTimeout(endGame, 1000);
    }
  }
}

function endGame()
{
  page = 5;
  clear();
  clearInterval(interval1);
  clearInterval(interval2);
  console.log("cleared" + page);
  drawEndPage();
  drawEndScore();
  posx = 10;
  score = 0;
  lives = 3;

  var i;
  for (i = 0; i < molangposx.length; i++)
  {
    molangposx[i] = 50 + (25 * (Math.floor(Math.random() * 20)));
  }
  var j;
  for (j = 0; j < molangposy.length; j++)
  {
    molangposy[j] = -1 * Math.floor(Math.random() * 50) * 30;
  }
}

function drawMolang()
{
  for (i = 0; i < molang.length; i++)
  {
    if(molangposy[i] == 475)
    {
      molangposy[i] = -1 * Math.floor(Math.random() * 50) * 30;
      molangposx[i] = 50 + 25 * (Math.floor(Math.random() * 20));
      console.log("cup never hit and reset "+ molangposy[i] + " " + checkCup(i));
    }
    else if(molangposy[i] == 500)
    {
      molangposy[i] = -1 * Math.floor(Math.random() * 50) * 30;
      molangposx[i] = 50 + 25 * (Math.floor(Math.random() * 20));
      console.log("cup did hit and reset " + molangposy[i] + " " + checkCup(i));
    }
    else if (!checkCup(i) && molangposy[i] < 475) // 250 is the grass, not caught
    {
      context.drawImage(molang[i], molangposx[i], molangposy[i], 50, 50);
      molangposy[i] = molangposy[i] + 1;
      // console.log("i made it" + molangposy + checkCup(0));
      updateScore(i);
    }
    else if (checkCup(i)) // caught
    {
      molangposy[i] = 500;
      updateScore(i);
    }
  }
}

function drawScore()
{
  context.font = "bold 20px Arial";
  context.fillStyle = "#7f7f7f";
  context.fillText("Lives: " + lives, 480, 350);

  context.font = "bold 20px Arial";
  context.fillStyle = "#7f7f7f";
  context.fillText("Score: " + score, 480, 400);
}

function drawEndScore()
{
  context.font = "bold 40px Arial";
  context.fillStyle = "#7f7f7f";
  context.fillText(score, 310, 322);
}

function clear()
{
  context.clearRect(0, 0, 600, 450);
}

function update()
{
  if (page == 4)
  {
    clear();
    drawGamePage();
    drawCup();
    drawMolang();
    drawScore();
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
  drawLoadingPage2();


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
      else if (page == 1) // About: Press UP to go to credits
      {
        drawCreditsPage();
      }
      else if (page == 2) // Instructions: Press UP to go to game background
      {
        drawGamePage();
        interval1 = setInterval(drawMolang, 20);
        interval2 = setInterval(update, 20);
      }
      else if (page == 3) // Credits: Press UP to go Home
      {
        drawHomePage();
      }
      else if (page == 4) // Game screen: Press UP to restart
      {
        endGame();
        /*
        clear();
        clearInterval(interval1);
        clearInterval(interval2);
        console.log("cleared" + page);
        drawEndPage();
        drawEndScore();
        posx = 10;
        score = 0;
        lives = 3;

        for (i = 0; i < molang.length; i++)
        {
          molangposy[i] = 0;
        }
        */
      }
      else if (page == 5) // End screen: Press UP to go home
      {
        drawGamePage();
        interval1 = setInterval(drawMolang, 20);
        interval2 = setInterval(update, 20);
      }
      else if (page == 6)
      {
        sound.play();
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
      else if (page == 5)
      {
        drawHomePage();
      }
    }
    else if (e.key === "ArrowLeft")
    {
      e.preventDefault();
      if (page == 4)
      {
        posx = posx - 20;
        // console.log(page + "left" + posx);
        // setInterval(update, 20);
      }
    }
    else if (e.key === "ArrowRight")
    {
      e.preventDefault();
      if (page == 4)
      {
        posx = posx + 20;
        // console.log(page + "right" + posx);
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
setTimeout(startGame, 2000);


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
