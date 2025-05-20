function filterDivs(category) {
  const divs = document.querySelectorAll('.card');
  divs.forEach(div => {
    if (category === 'all' || div.classList.contains(category)) {
      div.style.display = 'block'; // montrer la carte
    } else {
      div.style.display = 'none'; // cacher la carte
    }
  });
}
filterDivs('all');