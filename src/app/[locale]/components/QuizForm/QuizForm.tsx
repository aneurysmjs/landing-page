'use client';

import type { FC } from 'react';

import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

import useQuiz from '@/app/[locale]/hooks/useQuiz';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface Option {
  display: string;
  isRejection: boolean;
  value: boolean | string;
}

interface Question {
  options: Option[];
  question: string;
  type: string;
}

interface QuizData {
  questions: Question[];
}

interface QuizProps {
  data: QuizData;
}

const Quiz: FC<QuizProps> = ({ data }) => {
  const { answers, currentStep, handleAnswer, handleBack, isLastStep, isRejected, progress } =
    useQuiz(data);

  const renderQuestion = (question: Question, index: number) => {
    const selectedAnswer = answers[index];

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#0B3B3C]">{question.question}</h2>
        <div
          className={`
            grid grid-cols-2 gap-4

            md:grid-cols-3
          `}
        >
          {question.options.map((option, optionIndex) => {
            const isSelected = selectedAnswer === option.value;

            if (option.display.includes('<img')) {
              const src = /src="([^"]*)"/.exec(option.display)![1];
              const alt = /alt="([^"]*)"/.exec(option.display)![1];

              return (
                <Card
                  className={cn(
                    `
                      cursor-pointer p-4 transition-colors

                      hover:bg-muted
                    `,
                    isSelected ? 'ring-2 ring-primary' : '',
                  )}
                  key={optionIndex}
                  onClick={() => {
                    handleAnswer(index, option);
                  }}
                >
                  <div className="relative aspect-square">
                    <Image
                      alt={alt}
                      className="object-contain"
                      fill
                      src={src || '/placeholder.svg'}
                    />
                  </div>
                  <p className="mt-2 text-center font-medium">{option.value.toString()}</p>
                </Card>
              );
            }

            return (
              <Card
                className={cn(
                  `
                    cursor-pointer p-4 transition-colors

                    hover:bg-muted
                  `,
                  isSelected ? 'ring-2 ring-primary' : '',
                )}
                key={optionIndex}
                onClick={() => {
                  handleAnswer(index, option);
                }}
              >
                <p className="text-center font-medium">{option.display}</p>
              </Card>
            );
          })}
        </div>
      </div>
    );
  };

  const renderResults = () => {
    if (isRejected) {
      return (
        <div className="space-y-6 text-center">
          <h2 className={`text-2xl font-bold text-[#0B3B3C] text-foreground`}>We&apos;re Sorry</h2>
          <p className="text-muted-foreground font-bold text-[#0B3B3C]">
            Unfortunately, we are unable to prescribe this medication for you. This is because
            finasteride can alter the PSA levels, which may be used to monitor for cancer. You
            should discuss this further with your GP or specialist if you would still like this
            medication.
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-6 text-center">
        <h2 className="text-2xl font-bold text-[#0B3B3C] text-foreground">Great News!</h2>
        <p className="text-muted-foreground text-[#0B3B3C]">
          We have the perfect treatment for your hair loss. Proceed to www.manual.co, and prepare to
          say hello to your new hair!
        </p>
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl p-6">
        <div className="mb-8 flex items-center justify-between">
          {currentStep > 0 && (
            <Button
              aria-label="back button"
              disabled={isRejected}
              onClick={handleBack}
              size="icon"
              variant="ghost"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          )}
          <Progress
            aria-valuenow={progress}
            className="ml-auto w-[200px]"
            role="progressbar"
            value={progress}
          />
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          {!isLastStep ? renderQuestion(data.questions[currentStep], currentStep) : renderResults()}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
