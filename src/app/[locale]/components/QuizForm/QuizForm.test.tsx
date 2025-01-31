import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import Quiz from '../QuizForm';

const mockQuizData = {
  questions: [
    {
      options: [
        {
          display: '<img alt="Temples" src="/mock-image.png" />',
          isRejection: false,
          value: 'Temples',
        },
        {
          display: '<img alt="Patchy" src="/mock-image.png" />',
          isRejection: true,
          value: 'Patchy',
        },
        {
          display: '<img alt="Moderate" src="/mock-image.png" />',
          isRejection: false,
          value: 'Moderate',
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
      question: 'Have you ever been diagnosed with prostate cancer?',
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
      question: 'Have you ever been diagnosed with breast cancer?',
      type: 'ChoiceType',
    },
  ],
};

describe('Quiz Component', () => {
  beforeEach(() => {
    render(<Quiz data={mockQuizData} />);
  });

  describe('Initial Render', () => {
    it('should render the first question', () => {
      expect(screen.getByText('Which image best matches your hair loss?')).toBeInTheDocument();
    });

    it('should show the progress bar starting at 0%', () => {
      const progressBar = screen.getByRole('progressbar');

      expect(progressBar).toHaveAttribute('aria-valuenow', '0');
    });

    it('should have a hidden back button initially', () => {
      const backButton = screen.queryByRole('back button');

      expect(backButton).not.toBeInTheDocument();
    });
  });

  describe('Navigation and Progress', () => {
    it('should advance to next question when selecting a non-rejection option', () => {
      // Click the first (non-rejection) option
      fireEvent.click(screen.getByText('Temples'));

      // Should show second question
      expect(
        screen.getByText('Have you ever been diagnosed with prostate cancer?'),
      ).toBeInTheDocument();

      // Progress should be updated
      const progressBar = screen.getByRole('progressbar');

      expect(progressBar).toHaveAttribute('aria-valuenow', '33.33333333333333');
    });

    it('should enable back button after advancing to second question', () => {
      fireEvent.click(screen.getByText('Temples'));

      const backButton = screen.getByLabelText('back button');

      expect(backButton).not.toBeDisabled();
    });

    it('should show previously selected answer when going back', () => {
      // Select first answer and advance
      fireEvent.click(screen.getByText('Temples'));

      // Go back
      const backButton = screen.getByLabelText('back button');

      fireEvent.click(backButton);

      // Check if the first option is selected (has ring-2 class)
      const selectedOption = screen.getByText('Temples').closest('div');
      expect(selectedOption).toHaveClass('ring-2');
    });
  });

  describe('Rejection Handling', () => {
    it('should show rejection message immediately when selecting a rejection option', () => {
      // Click a rejection option
      fireEvent.click(screen.getByText('Patchy'));

      // Should show rejection message
      expect(
        screen.getByText(/Unfortunately, we are unable to prescribe this medication for you/),
      ).toBeInTheDocument();
    });

    it('should disable back button after rejection', () => {
      // Click a rejection option
      fireEvent.click(screen.getByText('Patchy'));

      // Back button should be disabled
      const backButton = screen.getByLabelText('back button');
      expect(backButton).toBeDisabled();
    });

    it('should not allow navigation after rejection', () => {
      // Click a rejection option
      fireEvent.click(screen.getByText('Patchy'));

      // Try to go back
      const backButton = screen.getByLabelText('back button');
      fireEvent.click(backButton);

      // Should still show rejection message
      expect(
        screen.getByText(/Unfortunately, we are unable to prescribe this medication for you/),
      ).toBeInTheDocument();
    });
  });

  describe('Success Path', () => {
    it('should show success message after completing all questions without rejection', () => {
      // Answer all questions with non-rejection options
      fireEvent.click(screen.getByText('Temples'));
      fireEvent.click(screen.getByText('No')); // Prostate cancer question
      fireEvent.click(screen.getByText('No')); // Breast cancer question

      // Should show success message
      expect(screen.getByText(/Great News!/)).toBeInTheDocument();
      expect(
        screen.getByText(/We have the perfect treatment for your hair loss/),
      ).toBeInTheDocument();
    });

    it('should show 100% progress after completing all questions', () => {
      // Complete all questions
      fireEvent.click(screen.getByText('Temples'));
      fireEvent.click(screen.getByText('No'));
      fireEvent.click(screen.getByText('No'));

      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toHaveAttribute('aria-valuenow', '100');
    });
  });

  describe('Edge Cases', () => {
    it('should handle changing a previous non-rejection answer to a rejection answer', () => {
      // First select non-rejection answers
      fireEvent.click(screen.getByText('Temples'));
      fireEvent.click(screen.getByText('No'));

      // Go back to first question
      const backButton = screen.getByLabelText('back button');
      fireEvent.click(backButton);
      fireEvent.click(backButton);

      // Change to rejection answer
      fireEvent.click(screen.getByText('Patchy'));

      // Should show rejection message
      expect(
        screen.getByText(/Unfortunately, we are unable to prescribe this medication for you/),
      ).toBeInTheDocument();
    });

    it('should maintain rejection state even after attempting navigation', () => {
      // Select rejection answer
      fireEvent.click(screen.getByText('Patchy'));

      // Try to navigate
      const backButton = screen.getByLabelText('back button');
      fireEvent.click(backButton);

      // Should still show rejection message
      expect(
        screen.getByText(/Unfortunately, we are unable to prescribe this medication for you/),
      ).toBeInTheDocument();
      expect(backButton).toBeDisabled();
    });
  });
});
