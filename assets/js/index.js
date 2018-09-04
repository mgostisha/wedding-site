document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('open');
  });

  ['wedding', 'accomodations', 'registry', 'adventures'].forEach(function (key) {
    document.getElementById('menu-content-' + key).addEventListener('click', function() {
      document.getElementById(key).scrollIntoView({ behavior: 'smooth' });
      document.getElementById('menu').classList.toggle('open');
    });
  });
});
