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
    q: "🕉️ Immersing in mantra waves or 🔕 Sitting in absolute silence?\n🕉️ મંત્રની તરંગોમાં લીન થવું કે 🔕 સંપૂર્ણ મૌનમાં બેસવું?",
    a1: { text: "Mantra Flow", type: "spiritual" },
    a2: { text: "Silent Being", type: "renunciate" }
  },
  {
    q: "🌄 Sunrise prayer on mountaintop or 🌌 Stargazing with cosmic thoughts?\n🌄 પર્વત શિખરે પ્રાર્થના કે 🌌 તારલાઓમાં બ્રહ્માંડનું ધ્યાન?",
    a1: { text: "Mountain Devotee", type: "devotional" },
    a2: { text: "Starry Seeker", type: "mystic" }
  },
  {
    q: "⚔️ Standing for justice or 🌬️ Forgiving with grace?\n⚔️ ન્યાય માટે લડવું કે 🌬️ કૃપાથી માફ કરવું?",
    a1: { text: "Justice Warrior", type: "warrior" },
    a2: { text: "Graceful Healer", type: "healer" }
  },
  {
    q: "📿 Losing self in japa or 🔭 Contemplating cosmic truth?\n📿 જપમાં પોતાને ભુલાવવું કે 🔭 બ્રહ્માંડના સત્ય પર ધ્યાન?",
    a1: { text: "Sacred Repeater", type: "spiritual" },
    a2: { text: "Cosmic Thinker", type: "seer" }
  },
  {
    q: "🌲 Forest solitude or 🏙️ Inner peace amidst chaos?\n🌲 જંગલમાં એકાંત કે 🏙️ શહેરની અશાંતિમાં શાંતિ શોધવી?",
    a1: { text: "Forest Renunciate", type: "renunciate" },
    a2: { text: "Urban Mystic", type: "mystic" }
  },
  {
    q: "👣 Following the Guru’s path or 🔥 Creating your own dharmic fire?\n👣 ગુરુનો માર્ગ અનુસરવો કે 🔥 પોતાનું ધર્મજ્વાળ ઊપજાવવું?",
    a1: { text: "Faithful Devotee", type: "devotional" },
    a2: { text: "Fiery Warrior", type: "warrior" }
  },
  {
    q: "💧 Flowing with Ganga or 🌪️ Dissolving ego in storm?\n💧 ગંગામાં વહેવું કે 🌪️ તોફાનમાં અહંકાર ભંગ કરવો?",
    a1: { text: "Divine Flow", type: "peaceful" },
    a2: { text: "Stormy Renunciate", type: "fierce" }
  },
  {
    q: "📜 Memorizing ancient chants or 🔍 Searching answers within?\n📜 પ્રાચીન મંત્રોનું સ્મરણ કે 🔍 અંદરથી જવાબ શોધવો?",
    a1: { text: "Scripture Bearer", type: "seer" },
    a2: { text: "Inner Seeker", type: "wise" }
  },
  {
    q: "🛐 Creating sacred rituals or 🤲 Healing hearts with words?\n🛐 પવિત્ર વિધિઓ રચવી કે 🤲 શબ્દોથી દિલને ચિકિત્સા આપવી?",
    a1: { text: "Ritual Devotee", type: "devotional" },
    a2: { text: "Spoken Healer", type: "healer" }
  },
  {
    q: "🧱 Building temples or 🌀 Building inner temple?\n🧱 મંદિરો બનાવવી કે 🌀 આંતરિક મંદિરનું નિર્માણ?",
    a1: { text: "Sacred Builder", type: "peaceful" },
    a2: { text: "Inner Architect", type: "mystic" }
  },
  {
    q: "🗡️ Cutting through illusion or 🧘 Melting into stillness?\n🗡️ મૃગતૃષ્ના તોડવી કે 🧘 શાંતિમાં ઓગળવું?",
    a1: { text: "Illusion Slayer", type: "fierce" },
    a2: { text: "Still Yogi", type: "spiritual" }
  },
  {
    q: "🪷 Guiding others to peace or 👁️ Seeking your divine origin?\n🪷 બીજાને શાંતિ તરફ દોરી જવું કે 👁️ પોતાની દૈવી મૂળ શોધવી?",
    a1: { text: "Peace Teacher", type: "seer" },
    a2: { text: "Origin Seeker", type: "wise" }
  },
  {
    q: "🏹 Leading with courage or 🧘‍♀️ Leading with presence?\n🏹 હિંમતથી નેતૃત્વ કરવું કે 🧘‍♀️ હાજરીથી નેતૃત્વ કરવું?",
    a1: { text: "Valiant Warrior", type: "warrior" },
    a2: { text: "Mindful Guide", type: "peaceful" }
  },
  {
    q: "🔥 Walking barefoot on embers or 💧 Letting tears heal you?\n🔥 અગ્નિ પર પગલા મૂકવા કે 💧 આશૂઓથી આરામ મેળવવો?",
    a1: { text: "Fire Walker", type: "fierce" },
    a2: { text: "Healed by Grace", type: "healer" }
  },
  {
    q: "📖 Reading lives of saints or ✨ Listening to the universe?\n📖 સંતોના જીવન વાંચવા કે ✨ બ્રહ્માંડની ભાષા સાંભળવી?",
    a1: { text: "Devout Reader", type: "devotional" },
    a2: { text: "Universal Listener", type: "mystic" }
  },
  {
    q: "🔗 Letting go of karma or 💥 Facing it fully?\n🔗 કર્મ છોડવો કે 💥 તેનું સામનો કરવો?",
    a1: { text: "Detached Sage", type: "renunciate" },
    a2: { text: "Karma Warrior", type: "warrior" }
  },
  {
    q: "🧚 Healing with touch or 💬 Healing with truth?\n🧚 સ્પર્શથી આરામ આપવો કે 💬 સત્યથી ચિકિત્સા કરવી?",
    a1: { text: "Touch Healer", type: "healer" },
    a2: { text: "Truth Healer", type: "seer" }
  },
  {
    q: "🌈 Living from the heart or 🌀 Living beyond the mind?\n🌈 દિલથી જીવવું કે 🌀 મનથી પર જીવન જીવવું?",
    a1: { text: "Heart Devotee", type: "devotional" },
    a2: { text: "Transcendent Mystic", type: "mystic" }
  },
  {
    q: "🧠 Learning endlessly or 🕉️ Knowing beyond learning?\n🧠 શીખતાં રહેવું કે 🕉️ શીખવાથી પરે જવું?",
    a1: { text: "Wise Learner", type: "wise" },
    a2: { text: "Spiritual Knower", type: "spiritual" }
  },
  {
    q: "🧹 Serving quietly or 🌟 Inspiring boldly?\n🧹 શાંતિથી સેવા કરવી કે 🌟 નિર્ભયતાથી પ્રેરણા આપવી?",
    a1: { text: "Silent Server", type: "peaceful" },
    a2: { text: "Bold Inspirer", type: "fierce" }
  },
  {
    q: "📿 Repeating 108 times or 📖 Understanding one fully?\n📿 ૧૦૮ વાર જપ કરવો કે 📖 એક જપને સંપૂર્ણ સમજી લેવો?",
    a1: { text: "Disciplined Devotee", type: "devotional" },
    a2: { text: "Deep Seeker", type: "wise" }
  },
  {
    q: "👣 Walking the ancient path or 🚀 Redefining the journey?\n👣 પ્રાચીન માર્ગ પર ચાલવું કે 🚀 યાત્રાને નવી દિશા આપવી?",
    a1: { text: "Tradition Holder", type: "seer" },
    a2: { text: "Path Breaker", type: "warrior" }
  },
  {
    q: "🌌 Feeling Oneness or 🪞 Witnessing Self?\n🌌 એકતાનું અનુભવ કરવો કે 🪞 સ્વનું દર્શન કરવું?",
    a1: { text: "Oneness Mystic", type: "mystic" },
    a2: { text: "Self Witness", type: "renunciate" }
  },
  {
    q: "🕊️ Blessing all beings or ⚔️ Conquering inner conflict?\n🕊️ સર્વ જીવ માટે આશીર્વાદ કે ⚔️ આંતરિક સંઘર્ષનો વિજય?",
    a1: { text: "Universal Healer", type: "healer" },
    a2: { text: "Inner Conqueror", type: "fierce" }
  },
  {
    q: "🎵 Singing bhajans or 🔇 Dissolving in silence?\n🎵 ભજન ગાવા કે 🔇 મૌનમાં ઓગળવું?",
    a1: { text: "Devotional Singer", type: "devotional" },
    a2: { text: "Silent Yogi", type: "spiritual" }
  }
];

document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("startBtn");
  const quizScreen = document.getElementById("quizScreen");
  const startScreen = document.getElementById("startScreen");
  const nameScreen = document.getElementById("nameScreen");
  const questionEl = document.getElementById("question");
  const option1 = document.getElementById("btn1");
  const option2 = document.getElementById("btn2");
  const submitNameBtn = document.getElementById("submitNameBtn");
  const userNameInput = document.getElementById("userNameInput");
  const bgMusic = document.getElementById("bgMusic");
  const musicToggle = document.getElementById("musicToggle");

  let currentQuestionIndex = 0;
  let selectedTypes = [];
  let selectedQuestions = [];

  function showQuestion() {
    const current = selectedQuestions[currentQuestionIndex];
    questionEl.textContent = current.q;
    option1.textContent = current.a1.text;
    option1.setAttribute("data-type", current.a1.type);
    option2.textContent = current.a2.text;
    option2.setAttribute("data-type", current.a2.type);
    option1.classList.remove("selected");
    option2.classList.remove("selected");
    option1.disabled = false;
    option2.disabled = false;
  }

  function handleOptionClick(e) {
    option1.classList.remove("selected");
    option2.classList.remove("selected");
    e.target.classList.add("selected");
    selectedTypes[currentQuestionIndex] = e.target.getAttribute("data-type");

    // Disable both to prevent double-clicks
    option1.disabled = true;
    option2.disabled = true;

    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
      } else {
        quizScreen.style.display = "none";
        nameScreen.style.display = "block";
        userNameInput.focus();
      }
    }, 500);
  }

  option1.addEventListener("click", handleOptionClick);
  option2.addEventListener("click", handleOptionClick);

  submitNameBtn.addEventListener("click", () => {
    const name = userNameInput.value.trim();
    if (!name) return alert("Please enter your name.");

    const counts = {};
    selectedTypes.forEach(type => {
      counts[type] = (counts[type] || 0) + 1;
    });
    const finalType = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
    const params = new URLSearchParams({ name, type: finalType });
    window.location.href = `result.html?${params.toString()}`;
  });

  startBtn.addEventListener("click", () => {
    bgMusic.play().then(() => {
      console.log("✅ Music started");
    }).catch((err) => {
      console.warn("⚠️ Music play blocked:", err);
    });

    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    selectedQuestions = shuffleArray([...shivaQuestions]).slice(0, 5);
    currentQuestionIndex = 0;
    selectedTypes = [];
    showQuestion();
  });

  // ✅ Music Toggle Working
  musicToggle.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicToggle.textContent = "🔊";
    } else {
      bgMusic.pause();
      musicToggle.textContent = "🔇";
    }
  });

  // ✅ iOS touchstart fix
  document.body.addEventListener("touchstart", () => {
    if (bgMusic.paused) {
      bgMusic.play().catch(() => {});
    }
  }, { once: true });

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
});
