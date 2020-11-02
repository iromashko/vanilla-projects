window.onload = function () {
  const colour_btn_els = document.querySelectorAll('.colours .colour');
  const capacity_btn_els = document.querySelectorAll('.capacity .size');
  const img = document.querySelector('.imagery img');
  const imgery = document.querySelector('.imagery');

  for (let i = 0; i < capacity_btn_els.length; i++) {
    let btn = capacity_btn_els[i];
    btn.addEventListener('click', function () {
      document
        .querySelector('.capacity .size.selected')
        .classList.remove('selected');
      this.classList.add('selected');
    });
  }

  for (let i = 0; i < colour_btn_els.length; i++) {
    let btn = colour_btn_els[i];
    btn.addEventListener('click', function () {
      document.querySelector('.colour.selected').classList.remove('selected');
      img.src = `/interactive_product/xr-${this.dataset.name}.png`;
      this.classList.add('selected');
      imgery.style.backgroundColor = this.dataset.colour;
    });
  }
};
