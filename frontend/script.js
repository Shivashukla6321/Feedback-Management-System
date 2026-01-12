const API_URL = "http://192.168.1.14:5000/api/feedback";

let selectedMood = "";
let fullscreenEnabled = false;

// Enable fullscreen on first interaction
function enableFullscreen() {
  if (!fullscreenEnabled && document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
    fullscreenEnabled = true;
  }
}

// Mood selection
function selectMood(mood) {
  selectedMood = mood;

  if (mood === "sad") {
    document.getElementById("reasonBox").style.display = "block";
  } else {
    submitFeedback();
  }
}

// Submit feedback
function submitFeedback() {
  const reason =
    selectedMood === "sad"
      ? document.getElementById("reason").value
      : "";

  if (selectedMood === "sad" && reason.trim() === "") {
    return;
  }

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mood: selectedMood, reason })
  })
    .then(() => {
      showThankYou();
    })
    .catch(err => console.log(err));
}

// Show thank you screen
function showThankYou() {
  document.getElementById("feedbackScreen").style.display = "none";
  document.getElementById("thankYouScreen").style.display = "flex";

  // Auto reset for next customer
  setTimeout(() => {
    location.reload();
  }, 2500);
}
