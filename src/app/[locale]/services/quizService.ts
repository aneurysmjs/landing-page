import type { QuizData } from '@/app/[locale]/models';

import apiAdapter from '@/adapters/apiAdapter';

const QUESTIONARIES_ENDPOINT = '/api/questionnaires';

const api = apiAdapter(QUESTIONARIES_ENDPOINT);

export async function getQuizData(id: string) {
  return api.get<QuizData>(id);
}
