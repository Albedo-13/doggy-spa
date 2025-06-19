'use client';

import { useEffect, useState } from 'react';

import { SIGN_UP_MODAL_SHOW_DELAY } from '@/utils/constants';
import { shouldDisableScroll } from '@/utils/should-disable-scroll';

/**
 * Custom hook for managing modal state and functionality.
 * @param {boolean} isOpenWithDelay - Should modal be open automatically with delay.
 * @returns {object} - Modal management functions and state.
 */
export const useModal = (isOpenWithDelay = false) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    shouldDisableScroll(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    shouldDisableScroll(false);
  };

  useEffect(() => {
    if (isOpenWithDelay) {
      const timer = setTimeout(() => {
        openModal();
      }, SIGN_UP_MODAL_SHOW_DELAY);

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};
