// Answer type
export type Answer = {
  questionId: string; // MongoDB ObjectId as a string
  answer: string;
};

// CategoryScore type for storing test name and category scores
export type CategoryScore = {
  [categoryName: string]: number; // Example: { "MBTIExtroversion": 80 }
};

// PersonalityType type for storing the entire PersonalityType document
export type PersonalityType = {
  name: string;
  shortDescription: string;
  description: string;
  testId: string; // MongoDB ObjectId as a string
};

// Result type
export type Result = {
  userId: string; // MongoDB ObjectId as a string
  testId: string; // MongoDB ObjectId as a string
  score: CategoryScore; // Object to store test name and category scores
  personalityType: PersonalityType; // Store the entire PersonalityType document
};
