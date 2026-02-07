/* ---------------- MUSIC ---------------- */
function startMusic() {
  music.play().catch(() => {});
  document.removeEventListener("click", startMusic);
  document.removeEventListener("touchstart", startMusic);
}

document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);

/* ---------------- SCENES ---------------- */
const text = document.getElementById("text");
const icon = document.getElementById("dayIcon");
const final = document.getElementById("final");

const scenes = [
  { img: "rose.png", txt: "Kuch log phool dete hain…\nKuch log phool ban jaate hain." },
  { img: "chocolate.png", txt: "Zindagi thodi sweet tab hui…\nJab tum saath aayi." },
  { img: "teddy.png", txt: "Tumhare saath main serious bhi hoon…\nAur bilkul baccha bhi." },
  { img: "promise.png", txt: "Main future ka vaada nahi karta…\nBas har din tumhara saath chahta." },
  { img: "hug.png", txt: "Kabhi sab kuch theek na lage…\nBas aapse baat hi kaafi hai." },
  { img: "kiss.png", txt: "Kuch moments bas mehsoos kiye jaate hain…" },
  { img: "valentine.png", txt: "Agar sab kuch badal bhi jaye na…\nTumhara saath rehna hi kaafi hoga ❤️" }
];

let i = 0;

function showScene() {
  if (i >= scenes.length) {
    text.style.display = "none";
    icon.style.display = "none";
    final.classList.remove("hidden");
    return;
  }

  icon.src = "assets/valentine/" + scenes[i].img;
  text.style.opacity = 0;

  setTimeout(() => {
    text.innerText = scenes[i].txt;
    text.style.opacity = 1;
    i++;
  }, 800);
}

setInterval(showScene, 5000);
showScene();

/* ---------------- NO BUTTON ---------------- */
const noBtn = document.getElementById("noBtn");
const noText = document.getElementById("noText");
const yesBtn = document.getElementById("yesBtn");

noBtn?.addEventListener("click", () => {
  const x = Math.random() * 140 - 70;
  const y = Math.random() * 100 - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  yesBtn.style.transform = "scale(1.2)";
  noText.classList.remove("hidden");
});

/* ---------------- HEART SPARKLES ❤️ ---------------- */
function heartSparkles() {
  const centerX = innerWidth / 2;
  const centerY = innerHeight / 2;
  const size = 12;
  const count = 80;

  for (let i = 0; i < count; i++) {
    const t = (Math.PI * 2 * i) / count;

    const x = size * 16 * Math.pow(Math.sin(t), 3);
    const y =
      -size *
      (13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t));

    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = centerX + x + "px";
    sparkle.style.top = centerY + y + "px";

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1500);
  }
}

/* ---------------- YES BUTTON MAGIC ---------------- */
const herPhoto = document.getElementById("herPhoto");
const loveLetter = document.getElementById("loveLetter");

yesBtn?.addEventListener("click", () => {
  // ❤️ Sparkles
  heartSparkles();

  // 📸 Her photo fade in
  setTimeout(() => {
    herPhoto.classList.remove("hidden");
    herPhoto.classList.add("fade-in");
  }, 700);

  // 💌 Letter after 2 sec
  setTimeout(() => {
    loveLetter.classList.remove("hidden");
    loveLetter.classList.add("fade-in");
  }, 2000);
});

/* ---------------- FINAL TEXT ---------------- */
function end() {
  final.innerHTML = `
    <p>
      Tum bas meri kahani ka hissa nahi ho…<br>
      tum hi meri poori duniya ho ❤️
    </p>
    <br><b>— Your Harshvardhan</b>
  `;
}

