document.querySelectorAll('textarea').forEach((el) => {
  el.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
      e.preventDefault();

      let value = '';
      let nextSelectionStart = this.selectionStart + 4;

      value += this.value.substring(0, this.selectionStart);
      value += '    ';
      value += this.value.substring(this.selectionEnd);

      this.value = value;
      this.selectionStart = nextSelectionStart;
      this.selectionEnd = nextSelectionStart;
    }
  });
  el.addEventListener('keyup', updateIframe);
});

function updateIframe() {
  const mountedPoint = document.querySelector('[data-iframe]');
  const html = document.querySelector('.square-html>textarea').value;
  const css = document.querySelector('.square-css>textarea').value;
  const javascript = document.querySelector('.square-javascript>textarea')
    .value;

  const page = `${html}<style>${css}</style><script>${javascript}</script>`;

  const iframe = document.createElement('iframe');
  iframe.src = 'data:text/html;charset=utf-8,' + page;
  mountedPoint.innerHTML = '';
  mountedPoint.append(iframe);
}

updateIframe();
