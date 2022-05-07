const wordsList = ["programming", "google", "wellCode", "learn", "computer", "relaxation", "project", "building", "documentation", "language", "practice"];
const selectedWord = wordsList.length;
let randomWord = Math.trunc(Math.random() * selectedWord);
const hangWord = wordsList[randomWord];
const guess = Array.from(hangWord);
const hid = Array.from(hangWord)
let lives = 5;
let x = 2;
for(let i = 1; i < guess.length -1; ++i) {
  guess[i] = '_';
}
document.getElementById("guess").innerHTML = guess.join(" ");
function check() {
    let letter = document.getElementById("get").value;
    document.getElementById("get").value = "";
    if(hid.includes(letter)) {
      for (let i = 1; i < guess.length - 1; ++i) {
        if (hid[i] == letter) {
          guess[i] = letter;
          x++;
        } 
      }
    } else {
      --lives;
      document.getElementById("lives").innerHTML = `Tries left: ${lives}`;
    }
    if(guess.length == x) {
      alert (`You won! Congratulation!`);
    }
    if (lives == 0) {
      alert (`The word was "${wordsList[randomWord]}". Try Again!`);
    }
   document.getElementById("guess").innerHTML = guess.join(" ");
}