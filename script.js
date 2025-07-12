const checkBtn = document.getElementById("checkBtn");
const wordInput = document.getElementById("text");
const tryBtn = document.querySelector(".tryBtn");
const form = document.querySelector(".form");
const result = document.querySelector(".result");
let wordModified;

// Form prevent default
form.addEventListener("click", (e) => {
  e.preventDefault();
});

checkBtn.addEventListener("click", () => {
  let reversed = wordModified.split("").reverse().join("");

  if (wordModified === reversed) {
    result.innerHTML = `
    <p>Yes, <span class="word">'${wordModified}'</span> is a palindrome!</p>
    `;
  } else {
    result.innerHTML = `
    <p>No, <span class="word">'${wordModified}'</span> is not a palindrome!</p>
    `;
  }
  wordInput.value = "";
});

// ENTER key

wordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !checkBtn.disabled) {
    checkBtn.click();
  }
});

wordInput.addEventListener("input", () => {
  const word = wordInput.value;
  wordModified = word.replace(/[^A-Za-z0-9]/gi, "");

  if (!wordModified) {
    checkBtn.classList.remove("active");
    checkBtn.disabled = true;
    result.innerHTML = `
    <p>Please enter a valid word!</p>
    `;
  } else if (wordModified) {
    checkBtn.classList.add("active");
    checkBtn.disabled = false;
  }
});
