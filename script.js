const emojis = document.querySelectorAll(".emoji");
const submitBtn = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");
const quoteText = document.getElementById("quote");

let selectedEmojis = [];

const quotes = {
  sad: [
    "It hurts when feelings stay unspoken.",
    "Sometimes smiling is the hardest thing.",
    "Not all pain has words.",
    "Silent tears are the heaviest.",
    "Even strong hearts feel tired."
  ],
  stress: [
    "Breathe in calm, breathe out stress.",
    "One step at a time is enough.",
    "Pause. Breathe. Continue.",
    "Stress less, live more.",
    "It's okay to slow down."
  ],
  angry: [
    "Pause before anger speaks.",
    "Anger fades, words stay.",
    "Calm is strength.",
    "Breathe, don't explode.",
    "Choose peace over rage."
  ],
  happy: [
    "Happiness looks good on you.",
    "Smile—it’s your superpower.",
    "Joy is found in small moments.",
    "Choose what makes you smile.",
    "Let happiness be loud."
  ],
  calm: [
    "Calm is a quiet kind of power.",
    "Peace begins with a breath.",
    "Stillness heals.",
    "Let calm lead you.",
    "Soft mind, strong heart."
  ],
  motivation: [
    "You’ve got this.",
    "Start now, grow later.",
    "Small steps, big wins.",
    "Believe. Begin. Become.",
    "Keep going, it matters.",
    "Dream. Try. Repeat.",
    "One step is progress."
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
