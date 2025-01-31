import { useState } from 'react';

import type { Option, QuizData } from '@/app/[locale]/models';

import { checkForRejection } from '@/app/[locale]/domain/quiz';

const useQuiz = (data: QuizData) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRejected, setIsRejected] = useState(false);
  const [answers, setAnswers] = useState<Record<number, boolean | string>>({});

  const isLastStep = currentStep === data.questions.length;

  const progress = (currentStep / data.questions.length) * 100;

  const handleAnswer = (questionIndex: number, option: Option) => {
    const newAnswers = { ...answers, [questionIndex]: option.value };

    setAnswers(newAnswers);

    if (option.isRejection) {
      setIsRejected(true);
      setCurrentStep(data.questions.length);
    } else {
      const hasRejection = checkForRejection(newAnswers, data.questions);
      setIsRejected(hasRejection);

      if (!hasRejection) {
        setCurrentStep((prev) => (prev < data.questions.length ? prev + 1 : prev));
      } else {
        setCurrentStep(data.questions.length);
      }
    }
  };

  const handleBack = () => {
    if (!isRejected) {
      setCurrentStep((prev) => Math.max(0, prev - 1));
    }
  };

  return {
    answers,
    currentStep,
    handleAnswer,
    handleBack,
    isLastStep,
    isRejected,
    progress,
  };
};

export default useQuiz;
