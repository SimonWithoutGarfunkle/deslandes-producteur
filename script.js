'use strict';
// Progressive enhancement only. No cookies, storage, analytics or third-party requests.
document.documentElement.classList.add('js');
const themeSwitch = document.querySelector('.theme-switch');
if (themeSwitch instanceof HTMLButtonElement) {
  const themes = [
    { id: '', name: 'Actuel' },
    { id: 'logo', name: 'Bleu & jaune' },
    { id: 'terre', name: 'Terre cuite' },
    { id: 'vigne', name: 'Rouge de vigne' }
  ];
  let themeIndex = 0;
  themeSwitch.addEventListener('click', () => {
    themeIndex = (themeIndex + 1) % themes.length;
    const theme = themes[themeIndex];
    if (theme.id) document.body.dataset.theme = theme.id;
    else delete document.body.dataset.theme;
    themeSwitch.textContent = `Thème : ${theme.name}`;
  });
}
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

// Embla 8.6.0 and Autoplay are served locally; the first photo remains usable if they fail.
if (typeof EmblaCarousel === 'function' && typeof EmblaCarouselAutoplay === 'function') {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('[data-carousel]').forEach(root => {
    const viewport = root.querySelector('.embla-viewport');
    const controls = root.querySelector('.carousel-controls');
    const playButton = root.querySelector('[data-play]');
    const counter = root.querySelector('.carousel-counter');
    const autoplay = EmblaCarouselAutoplay({
      delay: 6000, playOnInit: false, stopOnInteraction: true, stopOnFocusIn: false
    });
    const embla = EmblaCarousel(viewport, {
      loop: true,
      breakpoints: { '(prefers-reduced-motion: reduce)': { duration: 0 } }
    }, [autoplay]);
    let wantsPlayback = !reducedMotion.matches;
    let visible = false;
    let hovered = false;
    const updatePlayback = () => {
      const shouldPlay = wantsPlayback && visible && !hovered && !document.hidden;
      if (shouldPlay && !autoplay.isPlaying()) autoplay.play();
      if (!shouldPlay) autoplay.stop();
      playButton.textContent = wantsPlayback ? 'Suspendre' : 'Démarrer';
      const actionLabel = wantsPlayback ? 'Suspendre le défilement automatique' : 'Démarrer le défilement automatique';
      playButton.setAttribute('aria-label', actionLabel);
      playButton.title = actionLabel;
      counter.setAttribute('aria-live', autoplay.isPlaying() ? 'off' : 'polite');
    };
    const updateSelection = () => {
      const selected = embla.selectedScrollSnap();
      counter.textContent = `${selected + 1} / ${embla.slideNodes().length}`;
      embla.slideNodes().forEach((slide, index) => slide.setAttribute('aria-hidden', String(index !== selected)));
    };
    const stopPlayback = () => { wantsPlayback = false; updatePlayback(); };
    const navigate = direction => {
      stopPlayback();
      direction < 0 ? embla.scrollPrev() : embla.scrollNext();
    };
    root.querySelector('[data-prev]').addEventListener('click', () => navigate(-1));
    root.querySelector('[data-next]').addEventListener('click', () => navigate(1));
    playButton.addEventListener('click', () => {
      wantsPlayback = !wantsPlayback;
      hovered = false;
      updatePlayback();
    });
    viewport.addEventListener('keydown', event => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      navigate(event.key === 'ArrowLeft' ? -1 : 1);
    });
    root.addEventListener('focusin', event => { if (event.target !== playButton) stopPlayback(); });
    root.addEventListener('mouseenter', () => { hovered = true; updatePlayback(); });
    root.addEventListener('mouseleave', () => { hovered = false; updatePlayback(); });
    embla.on('pointerDown', stopPlayback);
    embla.on('select', updateSelection);
    embla.on('reInit', () => { updateSelection(); updatePlayback(); });
    document.addEventListener('visibilitychange', updatePlayback);
    reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) stopPlayback(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting;
        updatePlayback();
      }, { threshold: 0.25 }).observe(root);
    } else {
      visible = true;
    }
    root.classList.add('is-ready');
    controls.hidden = false;
    updateSelection();
    updatePlayback();
  });
}
