document.querySelectorAll('textarea').forEach((el) =>
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
  })
);
