
const BUTTON = document.querySelector('button, .button-ish');
const LINK = document.querySelector('a[ href = "#" ], .link-ish');

BUTTON.addEventListener('click', (ev) => {
  ev.preventDefault();
  console.debug('button-ish click:', ev);
  alert('Hello. You clicked a "button"!');
});

LINK.addEventListener('click', (ev) => {
  ev.preventDefault();
  console.debug('link-ish click:', ev);
  alert('Hello. You clicked a "link"!');
});
