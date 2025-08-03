const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const backgroundWrapper = document.getElementById("backgroundWrapper");
let musicWasPlayingBeforeSpeech = false;

const backgroundImages = {
  peaceful: "images/Peaceful.PNG",
  fierce: "images/Fierce.PNG",
  spiritual: "images/Spiritual.PNG",
  devotional: "images/Devotional.PNG",
  mystic: "images/Mystic.JPG",
  wise: "images/Wise.JPG",
  warrior: "images/Warrior.JPG",
  renunciate: "images/Renunciate.JPG",
  healer: "images/Healer.JPG",
  seer: "images/Seer.JPG"
};

musicToggle.addEventListener("click", () => {
  if (!bgMusic.paused) {
    bgMusic.pause();
    musicToggle.textContent = "🔇";
  } else {
    bgMusic.play().then(() => {
      musicToggle.textContent = "🔊";
    });
  }
});

function speakWelcomeMessage(name, type) {
  const synth = window.speechSynthesis;

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(`Welcome ${name}, you are a ${type} Bhakt!`);
    utterance.volume = 1;
    utterance.pitch = 1.1;
    utterance.rate = 0.95;

    const voices = synth.getVoices();
    const preferredVoice = voices.find(v =>
      (v.lang.toLowerCase().includes("gu") || v.lang.toLowerCase().includes("hi") || v.name.toLowerCase().includes("india")) &&
      v.name.toLowerCase().includes("female")
    ) || voices.find(v => v.lang.toLowerCase().includes("gu") || v.name.toLowerCase().includes("india"));

    if (preferredVoice) utterance.voice = preferredVoice;

    if (!bgMusic.paused) {
      musicWasPlayingBeforeSpeech = true;
      bgMusic.pause();
      musicToggle.textContent = "🔇";
    } else {
      musicWasPlayingBeforeSpeech = false;
    }

    utterance.onend = () => {
      if (musicWasPlayingBeforeSpeech) {
        bgMusic.play().then(() => {
          musicToggle.textContent = "🔊";
        });
      }
    };

    synth.speak(utterance);
  };

  if (synth.getVoices().length === 0) {
    synth.onvoiceschanged = () => setTimeout(speak, 300);
  } else {
    setTimeout(speak, 300);
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name") || "Bhakt";
  const type = params.get("type") || "devotional";

  document.getElementById("resultMessage").textContent = `Welcome, ${name}! You are a ${type} Bhakt!`;

  const bgImage = backgroundImages[type.toLowerCase()];
  if (bgImage) {
    backgroundWrapper.style.backgroundImage = `url(${bgImage})`;
    backgroundWrapper.style.backgroundSize = "cover";
    backgroundWrapper.style.backgroundPosition = "center";
    backgroundWrapper.style.backgroundRepeat = "no-repeat";
    backgroundWrapper.style.position = "fixed";
    backgroundWrapper.style.top = "0";
    backgroundWrapper.style.left = "0";
    backgroundWrapper.style.width = "100vw";
    backgroundWrapper.style.height = "100vh";
    backgroundWrapper.style.zIndex = "-1";
  }

  try {
    await bgMusic.play();
    musicToggle.textContent = "🔊";
  } catch (e) {
    musicToggle.textContent = "🔇";
  }

  setTimeout(() => {
    speakWelcomeMessage(name, type);
  }, 500);

  document.getElementById("goBackBtn").addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
