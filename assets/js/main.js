function slideUp() {
  // Apply slide-up animation class
  const askElement = document.querySelector("#ask");
  askElement.classList.add("animate__slideOutUp");

  // Ensure the content area is displayed
  const element = document.querySelector(".allContent");
  element.style.display = "block";

  // Initialize AOS (only once, ideally on page load)
  if (!AOS.initialized) {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 700,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom'
    });
    AOS.initialized = true;
  }

  // Play audio, making sure the play action is user-triggered
  const audio = new Audio("https://res.cloudinary.com/drbe61rqx/video/upload/v1730331635/Unstoppable_fw0bzu.mp3");
  audio.play().catch(error => {
    console.warn("Audio playback failed:", error);
    // Optionally, show a user prompt if necessary
  });
}
