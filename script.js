// MUTE / UNMUTE
document.addEventListener("click", e => {
  if (!e.target.closest(".speaker")) return;
  const reel = e.target.closest(".reel");
  const video = reel.querySelector("video");
  video.muted = !video.muted;
});

// PLAY / PAUSE ON TAP
document.addEventListener("click", e => {
  if (e.target.tagName !== "VIDEO") return;
  e.target.paused ? e.target.play() : e.target.pause();
});

// CREATE OVERLAY
const overlay = document.getElementById("createOverlay");

document.getElementById("openCreate").onclick = () => {
  overlay.classList.remove("hidden");
};

document.getElementById("closeCreate").onclick = () => {
  overlay.classList.add("hidden");
};

