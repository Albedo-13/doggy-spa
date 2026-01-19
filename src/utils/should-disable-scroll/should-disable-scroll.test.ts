import { shouldDisableScroll } from './should-disable-scroll';

describe('Scroll disabling', () => {
  test('Should be disabled on modal open', () => {
    shouldDisableScroll(true);
    expect(document.body.style.overflow).toBe('hidden');
  });

  test('Should be enabled on modal close', () => {
    shouldDisableScroll(false);
    expect(document.body.style.overflow).toBe('visible');
  });
});

