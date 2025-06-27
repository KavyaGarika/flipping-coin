const flipButton = document.getElementById("flipButton");
const resultDisplay = document.getElementById("result");
const image = document.getElementById("resultant image");
const flipGif = document.getElementById("tosss.gif");

flipButton.addEventListener("click", () => {
    resultDisplay.textContent = "Flipping...";

    flipGif.style.display = "block";
    flipGif.src = flipGif.src;


    setTimeout(() => {
        flipGif.style.display = "none";

        const result = Math.random() < 0.5 ? "Heads" : "Tails";

        if (result === "Heads") {
            image.innerHTML = '<img src="hee.jpg" width="280" height="200" alt="Heads">';
        } else {
            image.innerHTML = '<img src="tai.jpg" width="200" height="180" alt="Tails">';
        }

        resultDisplay.textContent = `Result: ${result}`;
    }, 3000);
});