// Helper function to disable scrolling
function disableScrolling() {
  document.body.style.overflow = 'hidden';
}

// Helper function to enable scrolling
function enableScrolling() {
  document.body.style.overflow = 'auto';
}

// Disable scrolling initially
disableScrolling();

// Add scroll event listener
window.addEventListener('scroll', () => {
  const sakuraOverlay = document.querySelector('.sakura-overlay');
  const introText = document.querySelector('.intro-text');
  const topPetals = document.querySelector('.top-petals');
  const bottomPetals = document.querySelector('.bottom-petals');

  const scrollPosition = window.scrollY / window.innerHeight;

  // Limit scrollPosition to 1 (the point where animation ends)
  const clampedScrollPosition = Math.min(scrollPosition, 1);

  // Calculate animation values
  const transformValue = clampedScrollPosition * 100; // Adjust movement speed
  const blurValue = clampedScrollPosition * 15; // Adjust blur intensity

  // Move petals and apply blur
  topPetals.style.transform = `translateY(-${transformValue}%) scale(1.1)`;
  bottomPetals.style.transform = `translateY(${transformValue}%) scale(1.1)`;
  topPetals.style.filter = `blur(${blurValue}px)`;
  bottomPetals.style.filter = `blur(${blurValue}px)`;

  // Fade in text
  introText.style.opacity = clampedScrollPosition > 0.3 ? '1' : '0';

  // Re-enable scrolling when animation is done
  if (clampedScrollPosition >= 1) {
      enableScrolling();
  }
});
