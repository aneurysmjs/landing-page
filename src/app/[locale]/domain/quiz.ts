import type { Question } from '@/app/[locale]/models';

export const checkForRejection = (
  answers: Record<number, boolean | string>,
  questions: Question[],
) => {
  return Object.entries(answers).some(([questionIndex, answer]) => {
    const question = questions[Number.parseInt(questionIndex)];
    const selectedOption = question.options.find((opt) => opt.value === answer);

    return selectedOption?.isRejection;
  });
};
