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
});
