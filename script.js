function donate() {
  window.open("https://www.worldwildlife.org/", "_blank");
}

function filterSpecies() {
  const filter = document.getElementById('filter').value;
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const status = card.getAttribute('data-status');
    card.style.display = (filter === 'all' || status === filter) ? 'block' : 'none';
  });
}