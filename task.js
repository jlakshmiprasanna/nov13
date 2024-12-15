const colorBox = document.getElementById("colorBox");
    const buttons = document.getElementById("changeColorButton");

    function changeColor() {
      setTimeout(() => {
        colorBox.style.backgroundColor = "blue";
      }, 5000);
    }

    buttons.addEventListener("click", changeColor);
    window.onload = changeColor;


    const button = document.getElementById("welcomeButton");
    let timeoutId;

    button.addEventListener("click", () => {
      if (timeoutId) {
        clearTimeout(timeoutId); 
      }
      timeoutId = setTimeout(() => {
        alert("Welcome!");
      }, 2000);
    });


    const countdownElement = document.getElementById("countdown");
    let timer = 10;

    const intervalId = setInterval(() => {
      countdownElement.textContent = timer;
      if (timer === 0) {
        clearInterval(intervalId);
        countdownElement.textContent = "Time's up!";
      }
      timer--;
    }, 1000);

    const clockElements = document.getElementById("clocks");

    function updateClocks() {
      const now = new Date();
      const hours = String(now.getHours());
      const minutes = String(now.getMinutes());
      const seconds = String(now.getSeconds());
      clockElements.textContent = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateClocks, 1000);
    updateClocks();