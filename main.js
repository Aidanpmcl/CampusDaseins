function handleSubmit(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  const btn = e.target.querySelector('button');
  btn.textContent = '✓ Subscribed!';
  btn.style.background = '#3d9a60';
  input.value = '';
  setTimeout(() => { btn.textContent = 'Join'; btn.style.background = ''; }, 3000);
}

document.querySelectorAll('.btn-cart').forEach(btn => {
  btn.addEventListener('click', function() {
    const orig = this.textContent;
    this.textContent = '✓ Added';
    this.style.borderColor = 'rgba(212,168,67,0.5)';
    this.style.color = '#d4a843';
    setTimeout(() => {
      this.textContent = orig;
      this.style.borderColor = '';
      this.style.color = '';
    }, 2000);
  });
});
