import { rtkApi } from '@/shared/api/rtkApi';
import { QuestionsSchema } from '../model/types/questionSchema';

interface GetQuestionsArgs {
  testId: string;
  limit: number;
}

const questionsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getQuestions: build.query<QuestionsSchema, GetQuestionsArgs>({
      query: ({ testId, limit }) => ({
        url: `tests/${testId}/questions?limit=${limit}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApi;
