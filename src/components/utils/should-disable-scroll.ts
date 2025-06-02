export function shouldDisableScroll(isModalOpen: boolean) {
  document.body.style.overflow = isModalOpen ? 'hidden' : 'visible';
}
