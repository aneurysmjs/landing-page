import { renderHook, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import type { QuizData } from '@/app/[locale]/models';

import { QueryProvider } from '@/lib/testing/renderWithQueryClient';

import useGetQuizData from './useGetQuizData';

const { mockGetQuizData } = vi.hoisted(() => ({
  mockGetQuizData: vi.fn(),
}));

vi.mock('@/app/[locale]/services/quizService', () => ({
  getQuizData: mockGetQuizData,
}));

describe('useGetTree', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should return a questionnarie data', async () => {
    const mockQuestionannireResponse: QuizData = {
      questions: [
        {
          options: [
            {
              display:
                '<img alt="Temples" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss%402x.png 2x" />',
              isRejection: false,
              value: 'Temples',
            },
            {
              display:
                '<img alt="Temples & Crown" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss%402 x.png 2x"/>',
              isRejection: false,
              value: 'Temples & Crown',
            },
            {
              display:
                '<img alt="Patchy" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss%402x.png 2x"/>',
              isRejection: true,
              value: 'Patchy',
            },
            {
              display:
                '<img alt="Moderate" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss%402x.pn g 2x" />',
              isRejection: false,
              value: 'Moderate',
            },
            {
              display:
                '<img alt="Extensive" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss%402x.pn g 2x"/>',
              isRejection: true,
              value: 'Extensive',
            },
            {
              display:
                '<img alt="Complete" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss%402x.pn g 2x" />',
              isRejection: true,
              value: 'Complete',
            },
          ],
          question: 'Which image best matches your hair loss?',
          type: 'ChoiceType',
        },
        {
          options: [
            {
              display: 'Yes',
              isRejection: true,
              value: true,
            },
            {
              display: 'No',
              isRejection: false,
              value: false,
            },
          ],
          question:
            'Have you ever been diagnosed with prostate cancer, or are you currently undergoing PSA/Prostate monitoring?',
          type: 'ChoiceType',
        },
        {
          options: [
            {
              display: 'Yes',
              isRejection: true,
              value: true,
            },
            {
              display: 'No',
              isRejection: false,
              value: false,
            },
          ],
          question:
            'Have you ever been diagnosed with breast cancer or noticed any changes in your breast tissue such as lumps, pain, nipple discharge or swelling?',
          type: 'ChoiceType',
        },
      ],
    };

    mockGetQuizData.mockResolvedValue(mockQuestionannireResponse);

    const { result } = renderHook(() => useGetQuizData('123abc'), {
      wrapper: QueryProvider,
    });

    expect(mockGetQuizData).toHaveBeenCalledWith('123abc');
    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.data).toStrictEqual(mockQuestionannireResponse);
      expect(result.current.isLoading).toBe(false);
    });
  });
});
