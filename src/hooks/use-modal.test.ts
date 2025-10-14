import { jest } from '@jest/globals';
import { act, renderHook } from "@testing-library/react";

import { SIGN_UP_MODAL_SHOW_DELAY } from "@/utils/constants";

import { useModal } from "./use-modal";

describe('useModal() hook', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers(); // Clear any remaining timers
    jest.useRealTimers(); // Restore real timers
  });

  test('Should have correct initial values', () => {
    const result = renderHook(() => useModal()).result;

    expect(result.current.isModalOpen).toBe(false);
  });

  test('Should toggle modal state', () => {
    const result = renderHook(() => useModal()).result;

    expect(result.current.isModalOpen).toBe(false);

    act(() => {
      result.current.openModal();
    });

    expect(result.current.isModalOpen).toBe(true);

    act(() => {
      result.current.closeModal();
    });

    expect(result.current.isModalOpen).toBe(false);
  });

  test('Should be opened with delay', () => {
    const result = renderHook(() => useModal(true)).result;

    expect(result.current.isModalOpen).toBe(false);

    act(() => {
      jest.advanceTimersByTime(SIGN_UP_MODAL_SHOW_DELAY);
    })

    expect(result.current.isModalOpen).toBe(true);
  });
});
