const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  const randomNumber = '#' + Math.floor(Math.random() * 8 ** 8).toString(16);
  document.body.style.backgroundColor = randomNumber;
  color.textContent = randomNumber;
});
