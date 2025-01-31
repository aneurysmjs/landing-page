import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { Option, QuizData } from '@/app/[locale]/models';

import useQuiz from './useQuiz';

// Mock quiz data
const mockQuizData: QuizData = {
  questions: [
    {
      options: [
        { display: 'Straight', isRejection: false, value: 'straight' },
        { display: 'Curly', isRejection: true, value: 'curly' }, // Curly is a rejection option
      ],
      question: 'What is your hair type?',
      type: 'single-select',
    },
    {
      options: [
        { display: 'Daily', isRejection: false, value: 'daily' },
        { display: 'Weekly', isRejection: false, value: 'weekly' },
      ],
      question: 'How often do you wash your hair?',
      type: 'single-select',
    },
  ],
};

describe('useQuiz Hook', () => {
  it('should initialize with the correct initial state', () => {
    const { result } = renderHook(() => useQuiz(mockQuizData));

    expect(result.current.currentStep).toBe(0);
    expect(result.current.isRejected).toBe(false);
    expect(result.current.answers).toEqual({});
    expect(result.current.isLastStep).toBe(false);
    expect(result.current.progress).toBe(0);
  });

  it('should handle answering a question and move to the next step', () => {
    const { result } = renderHook(() => useQuiz(mockQuizData));

    // Answer the first question with a non-rejection option
    const nonRejectionOption: Option = {
      display: 'Straight',
      isRejection: false,
      value: 'straight',
    };
    act(() => {
      result.current.handleAnswer(0, nonRejectionOption);
    });

    expect(result.current.answers).toEqual({ 0: 'straight' });
    expect(result.current.currentStep).toBe(1); // Move to the next question
    expect(result.current.progress).toBe(50); // Progress should be 50% (1 out of 2 questions answered)
    expect(result.current.isRejected).toBe(false); // No rejection
  });

  it('should handle answering a question with a rejection option', () => {
    const { result } = renderHook(() => useQuiz(mockQuizData));

    const rejectionOption: Option = { display: 'Curly', isRejection: true, value: 'curly' };

    act(() => {
      result.current.handleAnswer(0, rejectionOption);
    });

    expect(result.current.answers).toEqual({ 0: 'curly' });
    expect(result.current.currentStep).toBe(mockQuizData.questions.length); // Move to the last step (results)
    expect(result.current.isRejected).toBe(true);
    expect(result.current.progress).toBe(100); // (quiz ended)
  });

  it('should handle navigating back', () => {
    const { result } = renderHook(() => useQuiz(mockQuizData));

    // Answer the first question and move to the second question
    const nonRejectionOption: Option = {
      display: 'Straight',
      isRejection: false,
      value: 'straight',
    };

    act(() => {
      result.current.handleAnswer(0, nonRejectionOption);
    });

    // Navigate back to the first question
    act(() => {
      result.current.handleBack();
    });

    expect(result.current.currentStep).toBe(0); // Should be back to the first question
    expect(result.current.progress).toBe(0); // Progress should reset to 0%
  });

  it('should not allow navigating back if rejected', () => {
    const { result } = renderHook(() => useQuiz(mockQuizData));

    const rejectionOption: Option = { display: 'Curly', isRejection: true, value: 'curly' };

    act(() => {
      result.current.handleAnswer(0, rejectionOption);
    });

    // Attempt to navigate back
    act(() => {
      result.current.handleBack();
    });

    expect(result.current.currentStep).toBe(mockQuizData.questions.length); // Should still be at the last step
    expect(result.current.isRejected).toBe(true); // Rejection should still be true
  });
});
