export interface Option {
  display: string;
  isRejection: boolean;
  value: boolean | string;
}

export interface Question {
  options: Option[];
  question: string;
  type: string;
}

export interface QuizData {
  questions: Question[];
}
