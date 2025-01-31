'use client';

import type { FC } from 'react';

import QuizForm from '@/app/[locale]/components/QuizForm';
import ModalBase from '@/components/share/ModalBase';

const data = {
  questions: [
    {
      options: [
        {
          display:
            '<img alt="Temples" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss@2x.png 2x" />',
          isRejection: false,
          value: 'Temples',
        },
        {
          display:
            '<img alt="Temples & Crown" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss@2 x.png 2x"/>',
          isRejection: false,
          value: 'Temples & Crown',
        },
        {
          display:
            '<img alt="Patchy" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss@2x.png 2x"/>',
          isRejection: true,
          value: 'Patchy',
        },
        {
          display:
            '<img alt="Moderate" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss@2x.pn g 2x" />',
          isRejection: false,
          value: 'Moderate',
        },
        {
          display:
            '<img alt="Extensive" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss@2x.pn g 2x"/>',
          isRejection: true,
          value: 'Extensive',
        },
        {
          display:
            '<img alt="Complete" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss@2x.pn g 2x" />',
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

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuizModal: FC<QuizModalProps> = ({ isOpen, onClose }) => {
  return (
    <ModalBase className="bg-white" heading="Take Quiz" isOpen={isOpen} onClose={onClose}>
      <QuizForm data={data} />
    </ModalBase>
  );
};

export default QuizModal;
