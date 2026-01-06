const emojis = document.querySelectorAll(".emoji");
const submitBtn = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");
const quoteText = document.getElementById("quote");

let selectedEmojis = [];

const quotes = {
  sad: [
    "This feeling will pass. You are stronger than you think 💙",
    "Even the darkest night ends with sunrise 🌅",
    "It's okay to feel sad. Healing takes time."
  ],
  stress: [
    "Take a deep breath. You’re doing your best 🌿",
    "Slow down. One step at a time.",
    "You don’t have to control everything. Relax."
  ],
  angry: [
    "Pause. Breathe. Respond calmly 🧘",
    "Anger fades when understanding grows.",
    "Peace begins with you."
  ],
  happy: [
    "Your smile can change the world 😄",
    "Keep shining, you’re doing great!",
    "Happiness looks good on you!"
  ],
  calm: [
    "You are safe. You are present 🌸",
    "Enjoy this peaceful moment.",
    "Calm mind, strong soul."
  ],
  motivation: [
    "You matter. Your feelings are valid ❤️",
    "Every day is a fresh start.",
    "Believe in yourself. You’ve got this!"
  ]
};

emojis.forEach(emoji => {
  emoji.addEventListener("click", () => {
    if (emoji.classList.contains("selected")) {
      emoji.classList.remove("selected");
      selectedEmojis = selectedEmojis.filter(e => e !== emoji);
    } else {
      if (selectedEmojis.length < 4) {
        emoji.classList.add("selected");
        selectedEmojis.push(emoji);
      } else {
        alert("Please select only 4 emojis");
      }
    }
  });
});

submitBtn.addEventListener("click", () => {
  if (selectedEmojis.length !== 4) {
    alert("Please select exactly 4 emojis");
    return;
  }

  const moodCount = {};

  selectedEmojis.forEach(emoji => {
    const mood = emoji.dataset.mood;
    moodCount[mood] = (moodCount[mood] || 0) + 1;
  });

  let detectedMood = "motivation";
  let maxCount = 0;

  for (let mood in moodCount) {
    if (moodCount[mood] > maxCount) {
      maxCount = moodCount[mood];
      detectedMood = mood;
    }
  }

  const moodQuotes = quotes[detectedMood];
  const randomQuote = moodQuotes[Math.floor(Math.random() * moodQuotes.length)];

  quoteText.textContent = randomQuote;
  resultDiv.classList.remove("hidden");
});

function reset() {
  selectedEmojis.forEach(emoji => emoji.classList.remove("selected"));
  selectedEmojis = [];
  resultDiv.classList.add("hidden");
}
