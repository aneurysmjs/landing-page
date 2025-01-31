'use client';

import { type FC, lazy, Suspense, useState } from 'react';

const QuizModal = lazy(() => import('@/app/[locale]/components/QuizModal'));

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`
          h-12 w-12 animate-spin rounded-full border-4 border-gray-500
          border-t-transparent
        `}
      />
      <p className="mt-4 text-gray-500">Loading...</p>
    </div>
  );
};

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
        <Suspense fallback={<Loader />}>
          <QuizModal isOpen={isQuizModalOpen} onClose={handleCloseQuizModal} />
        </Suspense>
      )}
    </div>
  );
};

export default Quiz;
