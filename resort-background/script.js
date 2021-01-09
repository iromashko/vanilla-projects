const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  showcase.classList.toggle('active');
  menuToggle.classList.toggle('active');
});
