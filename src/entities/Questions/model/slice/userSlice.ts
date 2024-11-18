import {
  createSlice,
  // PayloadAction
} from '@reduxjs/toolkit';
import { QuestionSchema } from '../types/questionSchema';

const initialState: QuestionSchema = {
  id: 0,
  text: '',
  options: [],
  category: '',
  scoring: 'positive',
};

export const QuestionsSlice = createSlice({
  name: 'Questions',
  initialState,
  reducers: {
    // setAuthData: (state, action: PayloadAction<QuestionsSchema>) => {
    //   state.Questions = action.payload;
    // },
    // logout: (state) => {
    //   state.Questions = undefined;
    // },
  },
});

export const QuestionsActions = QuestionsSlice.actions;
export const QuestionsReducer = QuestionsSlice.reducer;
