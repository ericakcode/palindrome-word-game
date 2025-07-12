const checkBtn = document.getElementById("checkBtn");
const wordInput = document.getElementById("text");
const tryBtn = document.querySelector(".tryBtn");
const form = document.querySelector(".form");
const result = document.querySelector(".result");

// Form prevent default
form.addEventListener("click", (e) => {
  e.preventDefault();
});

checkBtn.addEventListener("click", () => {
  const word = wordInput.value;
  const wordModified = word.replace(/[^A-Za-z0-9]/g, "");
  const reversed = wordModified.split("").reverse().join("");

  if (wordModified) {
    if (word === reversed) {
      result.innerHTML = `
    <p>Yes, <span class="word">'${word}'</span> is a palindrome!</p>
    `;
    } else {
      result.innerHTML = `
    <p>No, <span class="word">'${word}'</span> is not a palindrome!</p>
    `;
    }
  } else if (!wordModified) {
    result.innerHTML = `
    <p>Please <strong>enter</strong> a word!</p>
    `;
  }
});
