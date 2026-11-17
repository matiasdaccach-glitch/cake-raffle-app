const namesInput = document.querySelector("#names");
const result = document.querySelector("#result");
const drawButton = document.querySelector("#draw");

drawButton.addEventListener("click", () => {
  const names = namesInput.value
    .split(/\r?\n/)
    .map((name) => name.trim())
    .filter(Boolean);

  if (names.length === 0) {
    result.textContent = "Agrega al menos un participante.";
    return;
  }

  const randomNumber = crypto.getRandomValues(new Uint32Array(1))[0];
  const winnerIndex = randomNumber % names.length;

  result.textContent = `🎉 ¡${names[winnerIndex]} ganó el pastel!`;
});