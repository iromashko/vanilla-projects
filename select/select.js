export const getTemplate = () => {
  return `
  <div class="select__input">
            <span>Select</span>
            <i class="fa fa-chevron-down"></i>
          </div>
          <div class="select__dropdown">
            <ul class="select__list">
              <li class="select__item">123</li>
              <li class="select__item">123</li>
              <li class="select__item">123</li>
              <li class="select__item">123</li>
              <li class="select__item">123</li>
              <li class="select__item">123</li>
              <li class="select__item">123</li>
              <li class="select__item">123</li>
              <li class="select__item">123</li>
              <li class="select__item">123</li>
              <li class="select__item">123</li>
              <li class="select__item">123</li>
              <li class="select__item">123</li>
              <li class="select__item">123</li>
              <li class="select__item">123</li>
              <li class="select__item">123</li>
              <li class="select__item">123</li>
            </ul>
          </div>
  `;
};

export class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
  }

  open() {
    this.$el.classList.add('open');
  }
  close() {
    this.$el.classList.remove('open');
  }
}
