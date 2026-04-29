// ===== FLOATING EMOJIS =====
const floatingEmojis = ['👶','💖','🧸','💗','🌸','💕','✨','🌷','💓','🎀','👶','💝'];
const container = document.getElementById('floaters');

function createFloater() {
  const emoji = floatingEmojis[Math.floor(Math.random() * floatingEmojis.length)];
  const el = document.createElement('div');
  el.className = 'floater';
  el.textContent = emoji;
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = (1.2 + Math.random() * 1.5) + 'rem';
  el.style.animationDuration = (8 + Math.random() * 12) + 's';
  el.style.animationDelay = '0s';
  container.appendChild(el);

  setTimeout(() => el.remove(), parseFloat(el.style.animationDuration) * 1000);
}

// Initial batch
for (let i = 0; i < 25; i++) {
  setTimeout(createFloater, i * 300);
}

// Continuous creation
setInterval(createFloater, 2000);


// ===== NAVIGATION =====
function navigate(pageId) {
  const current = document.querySelector('.page.active');
  if (current) current.classList.remove('active');

  const next = document.getElementById(pageId);
  next.classList.add('active');

  // Initialize page-specific features
  if (pageId === 'notes-page') {
    currentNoteIndex = 0;
    showNote(currentNoteIndex);
    if (autoPlayEnabled) startAutoPlay();
  } else {
    stopAutoPlay();
  }
}

function goBack() {
  stopAutoPlay();
  navigate('main-page');
}


// ===== LOVE NOTES =====
const loveNotes = [
  "Every sunrise reminds me how lucky I am to wake up loving you, Shree 💖",
  "You make my ordinary days feel like pages from a beautiful storybook ✨",
  "I'd choose you in every lifetime, every universe, every version of reality 💕",
  "Your laugh is the soundtrack to my happiest memories 😊",
  "Home isn't a place — it's wherever you are 🏠💖",
  "You're the reason I believe in magic and second chances 🌸",
  "Even when we disagree, I'm grateful it's with someone I love this deeply 💗",
  "Distance means nothing when someone means everything. You're my everything. 💌",
  "I fell for you when I wasn't even looking — best accident ever 💞",
  "They asked me to describe happiness. I showed them your picture 📸💕",
  "You're not just my girlfriend — you're my best friend, my anchor, my home 🧸",
  "Every moment with you is a memory I want to keep forever 🌷",
  "I promise to love you fiercely, annoy you daily, and adore you endlessly 😊💖",
  "You turned my life from black and white into full color 🌈",
  "I love you more than yesterday but less than tomorrow 💗"
];

let currentNoteIndex = 0;
let autoPlayEnabled = false;
let autoPlayTimer = null;

function showNote(index) {
  const el = document.getElementById('note-content');
  el.classList.add('fading');
  setTimeout(() => {
    el.textContent = loveNotes[index];
    el.classList.remove('fading');
  }, 300);
}

function nextNote() {
  currentNoteIndex = (currentNoteIndex + 1) % loveNotes.length;
  showNote(currentNoteIndex);
}

function toggleAutoPlay() {
  autoPlayEnabled = !autoPlayEnabled;
  document.getElementById('auto-text').textContent = autoPlayEnabled ? 'Auto-play: On' : 'Auto-play: Off';

  if (autoPlayEnabled) {
    startAutoPlay();
  } else {
    stopAutoPlay();
  }
}

function startAutoPlay() {
  stopAutoPlay();
  autoPlayTimer = setInterval(nextNote, 4500);
}

function stopAutoPlay() {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
}


// ===== HUG AGAIN ANIMATION =====
function triggerHugAgain() {
  const scene = document.querySelector('.teddy-scene');
  scene.style.animation = 'none';
  setTimeout(() => {
    scene.style.animation = '';
  }, 10);
}
