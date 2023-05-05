// talha

// Counting Variables
let numCorrect = 0;
// let final = ((4 - rez1 - rez2 - rez3 - rez4) / 4) * 100;
// let fraction = 4 - rez1 - rez2 - rez3 - rez4;
// Button Event Listner
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // INPUT
  let question1 = document.getElementById("question-in").value.toLowerCase();
  let question2 = document.getElementById("question-in2").value.toLowerCase();
  let question3 = document.getElementById("question-in3").value.toLowerCase();
  let question4 = +document.getElementById("question-in4").value.toLowerCase();

  let rez1 = 0;
  let rez2 = 0;
  let rez3 = 0;
  let rez4 = 0;
  // If statements
  if (question1 === "soccer" || question1 === "football") {
    document.getElementById("feedback1").innerHTML = "Correct!";
    numCorrect++;
  } else {
    // console.log("first wrong");
    rez1 = 1;
    document.getElementById("feedback1").innerHTML =
      "Incorrect, it is inspired by soccer";
  }

  if (question2 === "supersonic legend" || question2 === "ssl") {
    document.getElementById("feedback2").innerHTML = "Correct!";
    numCorrect++;
  } else {
    rez2 = 1;
    document.getElementById("feedback2").innerHTML =
      "Incorrect, supersonic legend is the highest rank in rocket league";
  }

  if (question3 === "bronze") {
    document.getElementById("feedback3").innerHTML = "Correct!";
    numCorrect++;
  } else {
    rez3 = 1;
    document.getElementById("feedback3").innerHTML =
      "Incorrect, bronze is the lowest rank in rl";
  }

  if (question4 === 8) {
    document.getElementById("feedback4").innerHTML = "Correct!";
    numCorrect++;
  } else {
    rez4 = 1;
    document.getElementById("feedback4").innerHTML =
      "Incorrect, 8 is the max but no one plays 4s so technically 6 but ye";
  }
  // Feedback code
  let final = ((4 - rez1 - rez2 - rez3 - rez4) / 4) * 100;
  let fraction = 4 - rez1 - rez2 - rez3 - rez4;
  if (final > 99) {
    let msg = `You scored a ${final}% aka ${fraction}/4 making you a rocket league GOD !`;
    document.getElementById("output").innerHTML = msg;
  } else if (final > 70) {
    let msg = `Great Job you scored a ${final}% aka ${fraction}/4`;
    document.getElementById("output").innerHTML = msg;
  } else if (final > 50) {
    let msg = `You scored a ${final}% aka ${fraction}/4, that means you have some knowledge in this field`;
    document.getElementById("output").innerHTML = msg;
  } else if (final > 25) {
    let msg = `Welp, at least you got one right, meaning you got ${final}% aka ${fraction}/4`;
    document.getElementById("output").innerHTML = msg;
  } else {
    let msg = `Wow, you know nothing about rocket league, you got a ${final}% aka ${fraction}/4`;
    document.getElementById("output").innerHTML = msg;
  }
}
