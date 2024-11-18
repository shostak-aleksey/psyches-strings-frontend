export type QuestionSchema = {
  _id: string; // Align with MongoDB's ObjectId
  text: string;
  options: string[];
  category:
    | 'MBTIExtroversion'
    | 'MBTIIntroversion'
    | 'MBTISensing'
    | 'MBTIIntuition'
    | 'MBTIThinking'
    | 'MBTIFeelings'
    | 'MBTIJudging'
    | 'MBTIPerceiving'
    | 'EnneagrammaType1'
    | 'EnneagrammaType2'
    | 'EnneagrammaType3'
    | 'EnneagrammaType4'
    | 'EnneagrammaType5'
    | 'EnneagrammaType6'
    | 'EnneagrammaType7'
    | 'EnneagrammaType8'
    | 'EnneagrammaType9'
    | 'HollandTypeA'
    | 'HollandTypeR'
    | 'HollandTypeI'
    | 'HollandTypeS'
    | 'HollandTypeE'
    | 'HollandTypeC'
    | 'CircleOfLifePersonalGrowth'
    | 'CircleOfLifeCareer'
    | 'CircleOfLifeValues'
    | 'CircleOfLifeLeisure'
    | 'CircleOfLifeHealth'
    | 'CircleOfLifeRelationships'
    | 'CircleOfLifeFinance'
    | 'CircleOfLifeSocialLife'
    | string; // Add other categories as needed
  scoring: 'positive' | 'negative';
  testId: string; // Add this field to match the Mongoose schema
};

export type CategoryResult = {
  category: string;
  percentage: number;
};

export type TestResult = {
  testId: number;
  results: CategoryResult[];
};
export type QuestionsSchema = [QuestionSchema];
