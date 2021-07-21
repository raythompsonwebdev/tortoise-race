const tortoiseOne = document.querySelector(".tortoise-one");
const tortoiseTwo = document.querySelector(".tortoise-two");
const raceArea = document.querySelector(".race-area");
const goButton = document.querySelector(".race-go");
let a = 0;
let b = 0;
var distancetoFinishA = raceArea.clientWidth - 10;

function mouseClick() {
  const myVar = setInterval(() => {
    tortoiseOne.style.transform = `translateX(${a}px)`;
    tortoiseTwo.style.transform = `translateX(${b}px)`;

    b += Math.random() * 10;
    a += Math.random() * 10;

    if (distancetoFinishA <= a) {
      clearInterval(myVar);
      alert("Tortiose One has won!!!");
    }
    if (distancetoFinishA <= b) {
      clearInterval(myVar);
      alert("Tortiose Two has won!!!");
    }
  }, 50);
}

goButton.addEventListener("click", mouseClick);
