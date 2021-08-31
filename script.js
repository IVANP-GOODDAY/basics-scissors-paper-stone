var main = function (input) {
  var randomSPS = getRandomSPS();
  console.log("randomSPS is");
  console.log(randomSPS);

  var myOutputValue =
    "Please key in one of the following: scissors, paper or stone.";

  if (
    (input == "scissors" && randomSPS == "paper") ||
    (input == "paper" && randomSPS == "stone") ||
    (input == "stone" && randomSPS == "scissors")
  ) {
    myOutputValue =
      "You won. <br> You chose " +
      input +
      " and the computer chose " +
      randomSPS +
      ". <br> Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.";
  }

  if (
    (randomSPS == "scissors" && input == "paper") ||
    (randomSPS == "paper" && input == "stone") ||
    (randomSPS == "stone" && input == "scissors")
  ) {
    myOutputValue =
      "You lost. <br> You chose " +
      input +
      " and the computer chose " +
      randomSPS +
      ". <br> Rules: scissors beats paper, paper beats stone, and stone beats scissors. <br> If both parties choose the same object, it's a draw.";
  }

  if (
    (randomSPS == "scissors" && input == "scissors") ||
    (randomSPS == "paper" && input == "paper") ||
    (randomSPS == "stone" && input == "stone")
  ) {
    myOutputValue =
      "It is a draw. <br> You chose " +
      input +
      " and the computer chose " +
      randomSPS +
      ". <br> Rules: scissors beats paper, paper beats stone, and stone beats scissors. <br> If both parties choose the same object, it's a draw.";
  }

  return myOutputValue;
};

var getRandomInteger = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var getRandomSPS = function () {
  var numSPS = 3;
  var randomSPSNo = getRandomInteger(numSPS);

  if (randomSPSNo == 1) {
    return "scissors";
  }

  if (randomSPSNo == 2) {
    return "paper";
  }

  if (randomSPSNo == 3) {
    return "stone";
  }
  return "Oops! There was a bug!";
};
