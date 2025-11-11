const drumSounds = {
  Q: { name: "Heater 1" },
  W: { name: "Heater 2" },
  E: { name: "Heater 3" },
  A: { name: "Heater 4" },
  S: { name: "Clap" },
  D: { name: "Open-HH" },
  Z: { name: "Kick-n'-Hat" },
  X: { name: "Kick" },
  C: { name: "Closed-HH" }
};

// Add click handlers for all drum pads
document.querySelectorAll(".drum-pad").forEach(pad => {
  pad.addEventListener('click', () => {
    const key = pad.id.charAt(0); // extract letter from '?-sound'
    triggerSound(key);
  });
});

// Add keydown handler for trigger keys
document.addEventListener('keydown', (e) => {
  const key = e.key.toUpperCase();
  if (drumSounds.hasOwnProperty(key)) {
    triggerSound(key);
  }
});

function triggerSound(key) {
  const audio = document.getElementById(key);
  // Reset and play the audio
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    // Display a unique description
    document.getElementById('display').innerText = drumSounds[key].name;
  }
}
