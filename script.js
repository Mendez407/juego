function play(playerChoice) {
  const choices = ["piedra", "papel", "tijera"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result;
  if (playerChoice === computerChoice) {
    result = "¡Empate!";
  } else if (
    (playerChoice === "piedra" && computerChoice === "tijera") ||
    (playerChoice === "papel" && computerChoice === "piedra") ||
    (playerChoice === "tijera" && computerChoice === "papel")
  ) {
    result = "¡Ganaste!";
  } else {
    result = "¡Perdiste!";
  }

  const playerImage = document.getElementById("player-image");
  const computerImage = document.getElementById("computer-image");
  playerImage.src = `imagen/sin fondo/${playerChoice}.png`;
  computerImage.src = `imagen/sin fondo/${computerChoice}.png`;
  document.getElementById("result").innerHTML = `Resultado: ${result}`;
}
