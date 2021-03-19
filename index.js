if (window.performance.navigation.type === 1) {
  roll();
}

function roll() {
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  var randomNumber2 = Math.floor((Math.random() * 6) + 1);

  var frstImg = "images/dice" + randomNumber1 + ".png";
  var scndImg = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".dice .im1").setAttribute("src", frstImg);
  document.querySelector(".dice .im2").setAttribute("src", scndImg);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
  }

}
