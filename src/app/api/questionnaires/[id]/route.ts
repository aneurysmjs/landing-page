import type { QuizData } from '@/app/[locale]/models';

const API_URL = 'https://manual-case-study.herokuapp.com/questionnaires';

export async function GET(req: Request, res: { params: Promise<{ id: string }> }) {
  const { id } = await res.params;

  try {
    const response = await fetch(`${API_URL}/${id}.json`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });

    if (!response.ok) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`Error: ${response.status}`);
    }

    const data = (await response.json()) as QuizData;

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    return new Response(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      JSON.stringify({ error: error.message, message: 'Internal Server Error' }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 500,
      },
    );
  }
}
