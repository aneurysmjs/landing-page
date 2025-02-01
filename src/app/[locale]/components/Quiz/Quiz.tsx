'use client';

import { type FC, lazy, Suspense, useState } from 'react';

import Loader from '@/components/share/Loader';

const QuizModal = lazy(() => import('@/app/[locale]/components/QuizModal'));

const Quiz: FC = () => {
  const [isQuizModalOpen, setIzQuizModalOpen] = useState(false);

  const handleCloseQuizModal = () => {
    setIzQuizModalOpen(false);
  };

  const openCloseQuizModal = () => {
    setIzQuizModalOpen(true);
  };

  return (
    <div className="relative mt-6">
      <button
        aria-label="take the quiz"
        className={`bg-[#7E0707] px-6 py-2 text-[10px]/[15px] uppercase`}
        onClick={openCloseQuizModal}
        type="button"
      >
        <span>Take the Quiz</span>
      </button>

      {isQuizModalOpen && (
        <Suspense
          fallback={
            <Loader
              // eslint-disable-next-line readable-tailwind/multiline
              className={`
                absolute left-1/2 -translate-x-1/2 transform
              `}
            />
          }
        >
          <QuizModal isOpen={isQuizModalOpen} onClose={handleCloseQuizModal} />
        </Suspense>
      )}
    </div>
  );
};

export default Quiz;
