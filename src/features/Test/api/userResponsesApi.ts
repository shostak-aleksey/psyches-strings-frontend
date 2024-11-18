import { rtkApi } from '@/shared/api/rtkApi';
import { Answer, Result } from '../model/types/UserResponse';

interface SubmitAnswersArgs {
  answers: Answer[];
  userId: string;
  testId: string;
}

const responsesApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    submitAnswers: build.mutation<Result, SubmitAnswersArgs>({
      query: ({ testId, userId, answers }) => ({
        url: `tests/${testId}/answers/`,
        method: 'POST',
        body: { userId, answers },
      }),
    }),
  }),
});

export const { useSubmitAnswersMutation } = responsesApi;
