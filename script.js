const shivaQuestions = [
  {
    q: "🌅 Peaceful Sunrise Practice or 🌇 Reflective Sunset Moment?\n🌅 શાંત સવારની સાધના કે 🌇 સંવેદનશીલ સાંજનું ધ્યાન?",
    a1: { text: "Morning Devotion", type: "peaceful" },
    a2: { text: "Evening Reflection", type: "peaceful" }
  },
  {
    q: "🔥 Standing Tall in Storm or 🕉️ Meditating Through Chaos?\n🔥 તોફાનમાં અડગ ઊભા રહેવું કે 🕉️ અશાંતિમાં ધ્યાનમાં જવું?",
    a1: { text: "Face It Fiercely", type: "fierce" },
    a2: { text: "Stay Calm Inside", type: "spiritual" }
  },
  {
    q: "🔱 Chanting Om Namah Shivaya or 🪔 Offering aarti daily?\n🔱 ઓમ નમઃ શિવાયના જાપ કરવી કે 🪔 દરરોજ આરતી અર્પણ કરવી?",
    a1: { text: "Mantra Meditation", type: "spiritual" },
    a2: { text: "Daily Devotion", type: "devotional" }
  },
  {
    q: "🌌 Exploring deep silence within or 🕳️ Entering the unknown caves of wisdom?\n🌌 અંદરની ગહન શાંતિ શોધવી કે 🕳️ જ્ઞાનની અજાણી ગુફામાં પ્રવેશવું?",
    a1: { text: "Mystic Journey", type: "mystic" },
    a2: { text: "Cave of Truth", type: "wise" }
  },
  {
    q: "⚔️ Protect Dharma or 🌿 Heal the hurting?\n⚔️ ધર્મની રક્ષા કરવી કે 🌿 દુ:ખી લોકોને આરામ આપવો?",
    a1: { text: "Be a Warrior", type: "warrior" },
    a2: { text: "Be a Healer", type: "healer" }
  },
  {
    q: "🌲 Living in solitude or 🧘 Teaching seekers?\n🌲 એકાંતમાં રહેવું કે 🧘 શોધકને માર્ગદર્શન આપવું?",
    a1: { text: "Silent Renunciation", type: "renunciate" },
    a2: { text: "Guide with Wisdom", type: "seer" }
  },
  {
    q: "🛕 Visiting sacred temples or 🏞️ Meditating in nature?\n🛕 પવિત્ર મંદિરની મુલાકાત કે 🏞️ પ્રકૃતિમાં ધ્યાન?",
    a1: { text: "Temple Devotion", type: "devotional" },
    a2: { text: "Nature Peace", type: "peaceful" }
  },
  {
    q: "🌩️ Dancing like Nataraja or 💭 Silently contemplating truth?\n🌩️ નટરાજની જેમ નૃત્ય કરવું કે 💭 શાંતપણે સત્ય પર વિચાર કરવો?",
    a1: { text: "Cosmic Energy", type: "fierce" },
    a2: { text: "Inner Awareness", type: "wise" }
  },
  {
    q: "🕯️ Lighting a lamp for others or 🔍 Seeking light within?\n🕯️ બીજાના માટે દીવો પ્રગટાવવો કે 🔍 અંદરનો પ્રકાશ શોધવો?",
    a1: { text: "Compassionate Healer", type: "healer" },
    a2: { text: "Mystic Seeker", type: "mystic" }
  },
  {
    q: "📿 Reciting sacred verses or 🧗‍♂️ Testing spiritual limits?\n📿 પવિત્ર શ્લોકોનું પાઠ કરવો કે 🧗‍♂️ આધ્યાત્મિક સીમાઓને અજમાવવી?",
    a1: { text: "Humble Devotee", type: "devotional" },
    a2: { text: "Fearless Explorer", type: "warrior" }
  },
  {
    q: "🏔️ Climbing towards Kailash or 🌊 Merging into the Ganga?\n🏔️ કૈલાસ તરફ ચઢાઈ કરવી કે 🌊 ગંગામાં વિલીન થવું?",
    a1: { text: "Mountain Ascetic", type: "renunciate" },
    a2: { text: "Flowing Peace", type: "peaceful" }
  },
  {
    q: "🧠 Teaching sacred scriptures or 🔮 Sharing visions of truth?\n🧠 પવિત્ર શાસ્ત્રો શીખવવા કે 🔮 સત્યના દર્શન વહેંચવા?",
    a1: { text: "Wisdom Speaker", type: "seer" },
    a2: { text: "Visionary Mystic", type: "mystic" }
  },
  {
    q: "🦁 Roaring for justice or 🧎‍♂️ Praying for peace?\n🦁 ન્યાય માટે કરજવું કે 🧎‍♂️ શાંતિ માટે પ્રાર્થના કરવી?",
    a1: { text: "Justice Warrior", type: "fierce" },
    a2: { text: "Peaceful Heart", type: "peaceful" }
  },
  {
    q: "📚 Studying Vedas or 🗿 Meditating on Shiva’s form?\n📚 વેદોનો અભ્યાસ કે 🗿 શિવરૂપ પર ધ્યાન?",
    a1: { text: "Vedic Scholar", type: "wise" },
    a2: { text: "Formless Focus", type: "spiritual" }
  },
  {
    q: "👣 Following Guru’s footsteps or 🧎‍♀️ Surrendering in Bhakti?\n👣 ગુરુના પગલે ચાલવું કે 🧎‍♀️ ભક્તિમાં લીન થવું?",
    a1: { text: "Path of Wisdom", type: "seer" },
    a2: { text: "Path of Devotion", type: "devotional" }
  },
  {
    q: "🎯 Living with purpose or 🕊️ Living in freedom?\n🎯 ઉદ્દેશ્ય સાથે જીવવું કે 🕊️ મુક્તતામાં જીવવું?",
    a1: { text: "Disciplined Warrior", type: "warrior" },
    a2: { text: "Liberated Sage", type: "renunciate" }
  },
  {
    q: "🕉️ Chanting in silence or 🎶 Singing bhajans aloud?\n🕉️ મૌનમાં જાપ કરવો કે 🎶 ભજન ગાવા?",
    a1: { text: "Silent Mystic", type: "mystic" },
    a2: { text: "Joyful Devotee", type: "devotional" }
  },
  {
    q: "🌿 Using herbs to help or ✋ Blessing with energy?\n🌿 ઔષધિઓથી સારવાર કરવી કે ✋ ઉર્જાથી આશીર્વાદ આપવો?",
    a1: { text: "Ayurvedic Healer", type: "healer" },
    a2: { text: "Energy Channeler", type: "spiritual" }
  },
  {
    q: "🧘 Seeking moksha alone or 👥 Helping others find it?\n🧘 પોતાનું મોક્ષ શોધવું કે 👥 બીજાને મોક્ષ તરફ દોરી જવું?",
    a1: { text: "Solo Renunciate", type: "renunciate" },
    a2: { text: "Selfless Seer", type: "seer" }
  },
  {
    q: "⚡ Facing inner demons or ⚖️ Balancing your life?\n⚡ આંતરિક અંધકારનો સામનો કરવો કે ⚖️ જીવનનું સંતુલન રાખવું?",
    a1: { text: "Spiritual Warrior", type: "warrior" },
    a2: { text: "Balanced Wise One", type: "wise" }
  },
  {
    q: "🥁 Beating the damru loud or 🧎 Sitting in stillness?\n🥁 ડમરૂનો ઘોંઘાટ કે 🧎 નિર્વિકાર બેસવું?",
    a1: { text: "Drummer of Energy", type: "fierce" },
    a2: { text: "Still Soul", type: "peaceful" }
  },
  {
    q: "🧩 Solving life’s mysteries or 💫 Letting go in surrender?\n🧩 જીવનના રહસ્યો ઉકેલવા કે 💫 સમર્પણમાં છોડી દેવું?",
    a1: { text: "Wisdom Walker", type: "wise" },
    a2: { text: "Spiritual Drop", type: "spiritual" }
  },
  {
    q: "🏹 Practicing archery or 🧴 Healing with oils?\n🏹 ધનુર્વિદ્યાનો અભ્યાસ કે 🧴 તેલથી સારવાર કરવી?",
    a1: { text: "Sacred Archer", type: "warrior" },
    a2: { text: "Soothe and Serve", type: "healer" }
  },
  {
    q: "⛰️ Living in Himalayas or 📖 Teaching scriptures?\n⛰️ હિમાલયમાં નિવાસ કે 📖 શાસ્ત્રોની શિક્ષા આપવી?",
    a1: { text: "Hermit Yogi", type: "renunciate" },
    a2: { text: "Wise Teacher", type: "seer" }
  },
  {
    q: "🌼 Offering flowers to Shiva or 🌬️ Breathing with the universe?\n🌼 શિવને ફૂલો અર્પણ કરવું કે 🌬️ બ્રહ્માંડ સાથે શ્વાસ લેવો?",
    a1: { text: "Loving Devotee", type: "devotional" },
    a2: { text: "Universal Mystic", type: "mystic" }
  },
   {
    q: "🌅 Peaceful Sunrise Practice or 🌇 Reflective Sunset Moment?\n🌅 શાંત સવારની સાધના કે 🌇 સંવેદનશીલ સાંજનું ધ્યાન?",
    a1: { text: "Morning Devotion", type: "peaceful" },
    a2: { text: "Evening Reflection", type: "peaceful" }
  },
  {
    q: "🔥 Standing Tall in Storm or 🕉️ Meditating Through Chaos?\n🔥 તોફાનમાં અડગ ઊભા રહેવું કે 🕉️ અશાંતિમાં ધ્યાનમાં જવું?",
    a1: { text: "Face It Fiercely", type: "fierce" },
    a2: { text: "Stay Calm Inside", type: "spiritual" }
  },
  {
    q: "🔱 Chanting Om Namah Shivaya or 🪔 Offering aarti daily?\n🔱 ઓમ નમઃ શિવાયના જાપ કરવી કે 🪔 દરરોજ આરતી અર્પણ કરવી?",
    a1: { text: "Mantra Meditation", type: "spiritual" },
    a2: { text: "Daily Devotion", type: "devotional" }
  },
  {
    q: "🌌 Exploring deep silence within or 🕳️ Entering the unknown caves of wisdom?\n🌌 અંદરની ગહન શાંતિ શોધવી કે 🕳️ જ્ઞાનની અજાણી ગુફામાં પ્રવેશવું?",
    a1: { text: "Mystic Journey", type: "mystic" },
    a2: { text: "Cave of Truth", type: "wise" }
  },
  {
    q: "⚔️ Protect Dharma or 🌿 Heal the hurting?\n⚔️ ધર્મની રક્ષા કરવી કે 🌿 દુ:ખી લોકોને આરામ આપવો?",
    a1: { text: "Be a Warrior", type: "warrior" },
    a2: { text: "Be a Healer", type: "healer" }
  },
  {
    q: "🌲 Living in solitude or 🧘 Teaching seekers?\n🌲 એકાંતમાં રહેવું કે 🧘 શોધકને માર્ગદર્શન આપવું?",
    a1: { text: "Silent Renunciation", type: "renunciate" },
    a2: { text: "Guide with Wisdom", type: "seer" }
  },
  {
    q: "🛕 Visiting sacred temples or 🏞️ Meditating in nature?\n🛕 પવિત્ર મંદિરની મુલાકાત કે 🏞️ પ્રકૃતિમાં ધ્યાન?",
    a1: { text: "Temple Devotion", type: "devotional" },
    a2: { text: "Nature Peace", type: "peaceful" }
  },
  {
    q: "🌩️ Dancing like Nataraja or 💭 Silently contemplating truth?\n🌩️ નટરાજની જેમ નૃત્ય કરવું કે 💭 શાંતપણે સત્ય પર વિચાર કરવો?",
    a1: { text: "Cosmic Energy", type: "fierce" },
    a2: { text: "Inner Awareness", type: "wise" }
  },
  {
    q: "🕯️ Lighting a lamp for others or 🔍 Seeking light within?\n🕯️ બીજાના માટે દીવો પ્રગટાવવો કે 🔍 અંદરનો પ્રકાશ શોધવો?",
    a1: { text: "Compassionate Healer", type: "healer" },
    a2: { text: "Mystic Seeker", type: "mystic" }
  },
  {
    q: "📿 Reciting sacred verses or 🧗‍♂️ Testing spiritual limits?\n📿 પવિત્ર શ્લોકોનું પાઠ કરવો કે 🧗‍♂️ આધ્યાત્મિક સીમાઓને અજમાવવી?",
    a1: { text: "Humble Devotee", type: "devotional" },
    a2: { text: "Fearless Explorer", type: "warrior" }
  },
  {
    q: "🪷 Practicing daily meditation or 🗻 Retreating into the Himalayas?\n🪷 રોજ ધ્યાન કરવું કે 🗻 હિમાલયમાં પ્રવેશવું?",
    a1: { text: "Daily Practice", type: "spiritual" },
    a2: { text: "Sage’s Retreat", type: "renunciate" }
  },
  {
    q: "💫 Receiving divine visions or 🧠 Gaining inner knowledge?\n💫 દૈવી દર્શન પ્રાપ્ત કરવો કે 🧠 અંદરનું જ્ઞાન પ્રાપ્ત કરવું?",
    a1: { text: "Divine Seer", type: "seer" },
    a2: { text: "Wise Thinker", type: "wise" }
  },
  {
    q: "🦋 Whispering healing mantras or 🛡️ Defending the innocent?\n🦋 હીલિંગ મંત્રોનું પઠન કરવું કે 🛡️ નિર્દોષની રક્ષા કરવી?",
    a1: { text: "He-aling Touch", type: "healer" },
    a2: { text: "Bold Protector", type: "warrior" }
  },
  {
    q: "🕉️ Sitting under a Bodhi tree or 🔥 Walking through fire for truth?\n🕉️ બોધ વૃક્ષ નીચે ધ્યાન કરવું કે 🔥 સત્ય માટે અગ્નિમાં ચાલવું?",
    a1: { text: "Peaceful Seeker", type: "peaceful" },
    a2: { text: "Fierce Believer", type: "fierce" }
  },
  {
    q: "🌠 Discovering inner cosmos or 📜 Studying ancient scriptures?\n🌠 અંદરનું બ્રહ્માંડ શોધવું કે 📜 પ્રાચીન ગ્રંથોનો અભ્યાસ કરવો?",
    a1: { text: "Mystic Mind", type: "mystic" },
    a2: { text: "Scriptural Wisdom", type: "wise" }
  },
  {
    q: "🧎‍♂️ Bhakti with full heart or 🧘 Self-awareness through silence?\n🧎‍♂️ પૂરેપૂરાં હૃદયથી ભક્તિ કરવી કે 🧘 મૌન દ્વારા આત્મજ્ઞાન મેળવવું?",
    a1: { text: "Devoted Heart", type: "devotional" },
    a2: { text: "Inner Awareness", type: "spiritual" }
  },
  {
    q: "🌿 Healing wounds of others or 🌪️ Breaking ego through penance?\n🌿 બીજાના ઘાવ સાજા કરવી કે 🌪️ તપ દ્વારા અહંકાર તોડવો?",
    a1: { text: "Sacred Healer", type: "healer" },
    a2: { text: "Intense Renunciate", type: "renunciate" }
  },
  {
    q: "🧙‍♂️ Sharing divine teachings or 👁️‍🗨️ Seeing truth beyond illusion?\n🧙‍♂️ દૈવી જ્ઞાન વહેંચવું કે 👁️‍🗨️ મૃગતૃષ્નાથી પરે સત્ય જોવું?",
    a1: { text: "Sage’s Voice", type: "seer" },
    a2: { text: "Truth Vision", type: "mystic" }
  },
  {
    q: "🎯 Focus on duty or 🕊️ Surrender to divine?\n🎯 કર્તવ્ય પર ધ્યાન કે 🕊️ ઈશ્વર સમર્પણ?",
    a1: { text: "Dharma Warrior", type: "warrior" },
    a2: { text: "Peaceful Bhakt", type: "devotional" }
  },
  {
    q: "🪖 March with purpose or 🧘‍♂️ Meditate with intent?\n🪖 હેતુ સાથે આગળ વધવું કે 🧘‍♂️ ઇરાદાપૂર્વક ધ્યાન કરવું?",
    a1: { text: "Purposeful Warrior", type: "warrior" },
    a2: { text: "Focused Yogi", type: "spiritual" }
  },
  {
    q: "👃 Breathing with awareness or 🌠 Gazing at the stars for signs?\n👃 સ્ફૂર્તિના સાથે શ્વાસ લેવું કે 🌠 તારાઓમાં સંકેતો શોધવા?",
    a1: { text: "Inner Breath", type: "peaceful" },
    a2: { text: "Cosmic Sign Reader", type: "seer" }
  },
  {
    q: "🌀 Embracing the unknown or 🔬 Analyzing sacred logic?\n🌀 અજાણ્યાને અપનાવવું કે 🔬 પવિત્ર તર્કને સમજી લેવું?",
    a1: { text: "Mystic Opener", type: "mystic" },
    a2: { text: "Logical Wise One", type: "wise" }
  },
  {
    q: "🧘 Letting go of desires or ❤️ Loving the divine with longing?\n🧘 ઈચ્છાઓને છોડવી કે ❤️ તીવ્ર ભક્તિથી ઈશ્વરને પ્રેમ કરવો?",
    a1: { text: "True Renunciate", type: "renunciate" },
    a2: { text: "Longing Devotee", type: "devotional" }
  },
  {
    q: "🏹 Fighting inner demons or ✨ Healing past karma?\n🏹 આંતરિક દાનવો સાથે લડવું કે ✨ ભૂતકાળના કર્મોને ચિકિત્સા આપવી?",
    a1: { text: "Inner Warrior", type: "warrior" },
    a2: { text: "Karmic Healer", type: "healer" }
  },
  {
    q: "📚 Teaching spiritual truth or 🤲 Helping others awaken?\n📚 આધ્યાત્મિક સત્ય શીખવવું કે 🤲 બીજાને જાગૃત કરવું?",
    a1: { text: "Truth Teacher", type: "seer" },
    a2: { text: "Awakening Guide", type: "spiritual" }
  }
];

const musicToggle = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bgMusic");
const startBtn = document.querySelector(".start-btn");
const questionEl = document.getElementById("question");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const quizScreen = document.getElementById("quizScreen");
const startScreen = document.getElementById("startScreen");
const nameScreen = document.getElementById("nameScreen");
const submitNameBtn = document.getElementById("submitNameBtn");
const userNameInput = document.getElementById("userNameInput");

let musicPlaying = true;
let currentQuestionIndex = 0;
let selectedTypes = [];
let selectedQuestions = [];


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function showQuestion() {
  const current = selectedQuestions[currentQuestionIndex];
  questionEl.textContent = current.q;
  btn1.textContent = current.a1.text;
  btn2.textContent = current.a2.text;

  btn1.onclick = () => handleAnswer(current.a1.type);
  btn2.onclick = () => handleAnswer(current.a2.type);
}

function handleAnswer(type) {
  selectedTypes.push(type);
  currentQuestionIndex++;
  if (currentQuestionIndex < selectedQuestions.length) {
    showQuestion();
  } else {
    quizScreen.style.display = "none";
    nameScreen.style.display = "block";
  }
}

function getMostFrequentType(arr) {
  const count = {};
  arr.forEach((type) => {
    count[type] = (count[type] || 0) + 1;
  });
  return Object.keys(count).reduce((a, b) => (count[a] > count[b] ? a : b));
}

submitNameBtn.addEventListener("click", () => {
  const name = userNameInput.value.trim();
  if (name !== "") {
    const dominantType = getMostFrequentType(selectedTypes);
    const url = `result.html?name=${encodeURIComponent(name)}&type=${encodeURIComponent(dominantType)}`;
    window.location.href = url;
  }
});

startBtn.addEventListener("click", () => {
  bgMusic.play();
  startScreen.style.display = "none";
  quizScreen.style.display = "block";
  selectedQuestions = shuffleArray([...shivaQuestions]).slice(0, 5);
  currentQuestionIndex = 0;
  selectedTypes = [];
  showQuestion();
});

// ✅ Ensure music starts when page is interacted
document.body.addEventListener("click", () => {
  bgMusic.play().catch(() => {});
}, { once: true });

// ✅ Toggle music on icon click
musicToggle.addEventListener("click", () => {
  if (!bgMusic.paused) {
    bgMusic.pause();
    musicToggle.textContent = "🔇";
  } else {
    bgMusic.play().catch(() => {});
    musicToggle.textContent = "🔊";
  }
});
