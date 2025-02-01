import { useQuery } from '@tanstack/react-query';

import { getQuizData } from '@/app/[locale]/services/quizService';

const useGetQuizData = (id: string) => {
  return useQuery({
    queryFn: () => getQuizData(id),
    queryKey: ['quiz-data'],
  });
};

export default useGetQuizData;
