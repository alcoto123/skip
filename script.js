document.addEventListener('DOMContentLoaded', function () {
  console.log('My Project initialized');

  // Create a demo button and append to the first section
  var btn = document.createElement('button');
  btn.textContent = 'Click me';
  btn.style.padding = '8px 12px';
  btn.style.marginTop = '1rem';

  btn.addEventListener('click', function () {
    alert('Hello from My Project!');
  });

  var target = document.querySelector('main section') || document.querySelector('main');
  if (target) target.appendChild(btn);

  // Mobile navigation toggle
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('open');
    });

    // Close nav when a link is clicked (on mobile)
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
