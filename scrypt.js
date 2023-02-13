const rebuses = [
    {
      image: "./rebuses/02.jpg",
      answer: "Теніс",
    },
    {
      image: "./rebuses/03.jpg",
      answer: "Морозиво",
    },
    {
      image: "./rebuses/01.jpg",
      answer: "Книга",
    },
    {
        image: "./rebuses/04.jpg",
        answer: "Школа"
      }
      
  ];

  
  let score = 0;
  let rebusImg = document.getElementById("rebusImg");
  let input = document.getElementById("input");
  let button = document.getElementById("button");
  let scoreDisplay = document.getElementById("score");
  
  let currentRebus = rebuses[Math.floor(Math.random() * rebuses.length)];
  rebusImg.src = currentRebus.image;
  
  button.addEventListener("click", checkAnswer);
  
  function checkAnswer() {
    if (input.value.toLowerCase() === currentRebus.answer.toLowerCase()) {
      alert("Правильно!");
      score += 50;
      scoreDisplay.innerHTML = `Score: ${score}`;
      if (score === 200) {
        alert("Ти виграв!");
        score = 0;
      }
      currentRebus = rebuses[Math.floor(Math.random() * rebuses.length)];
      rebusImg.src = currentRebus.image;
      input.value = "";
    } else {
      alert("Невірно :(");
    }
  }

 let body = document.getElementById("button")
function change() {
let red = Math.random() * 255
let green = Math.random() * 255
let blue = Math.random() * 255

document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
button1.innerText = "red = " + Math.trunc(red) + " " + "green = " + Math.trunc(green) + " " + "blue = " + Math.trunc(blue)

}
setInterval(change, 1000)