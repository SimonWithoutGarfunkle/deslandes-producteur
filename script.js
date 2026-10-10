'use strict';
// Progressive enhancement only. No cookies, storage, analytics or network requests.
document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
if (toggle instanceof HTMLButtonElement && nav instanceof HTMLElement) {
  toggle.hidden = false;
  const closeMenu = () => { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', event => {
    if (event.target instanceof Element && event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); }
  });
  matchMedia('(min-width: 721px)').addEventListener('change', closeMenu);
}

/** @param {HTMLDialogElement} imageDialog */
function enableImageDialog(imageDialog) {
  const enlargedImage = imageDialog.querySelector('img');
  const caption = imageDialog.querySelector('figcaption');
  const closeButton = imageDialog.querySelector('.dialog-close');
  if (!enlargedImage || !caption || !(closeButton instanceof HTMLButtonElement)) return;

  /** @type {HTMLAnchorElement | null} */
  let opener = null;
  document.querySelectorAll('.image-zoom').forEach(link => {
    if (!(link instanceof HTMLAnchorElement)) return;
    const thumbnail = link.querySelector('img');
    if (!thumbnail) return;
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      enlargedImage.src = link.href;
      enlargedImage.alt = thumbnail.alt;
      caption.textContent = enlargedImage.alt;
      imageDialog.showModal();
      document.documentElement.classList.add('image-dialog-open');
    });
  });
  closeButton.addEventListener('click', () => imageDialog.close());
  imageDialog.addEventListener('click', event => {
    if (event.target !== imageDialog) return;
    const bounds = imageDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) imageDialog.close();
  });
  imageDialog.addEventListener('close', () => {
    document.documentElement.classList.remove('image-dialog-open');
    opener?.focus({ preventScroll: true });
  });
}

const imageDialog = document.querySelector('.image-dialog');
if (typeof HTMLDialogElement !== 'undefined' && imageDialog instanceof HTMLDialogElement) {
  enableImageDialog(imageDialog);
}
