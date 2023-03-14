const snake = document.querySelector("#snake ");
let leftPosition = 0;
let topPosition = 0;

document.addEventListener("keydown", (event) => {
  const { key: eventKey } = event;

  switch (eventKey) {
    case "ArrowRight":
      leftPosition += 30;
      snake.style.left = `${leftPosition}px`;

      break;
    case "ArrowLeft":
      leftPosition -= 30;
      snake.style.left = `${leftPosition}px`;
      break;

    case "ArrowUp":
      topPosition -= 30;
      snake.style.top = `${topPosition}px`;
      break;
    case "ArrowDown":
      topPosition += 30;
      snake.style.top = `${topPosition}px`;
      break;
  }
});
