import React, { useState } from 'react';
import styled from 'styled-components';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StringCanvas } from '@/shared/ui/Strings/StringCanvas/StringCanvas';
import { Button } from '@/shared/ui/Button';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useSubmitAnswersMutation } from '../api/userResponsesApi';
import { useGetQuestionsQuery } from '@/entities/Questions';
import { getRouteResults } from '@/shared/const/router';

gsap.registerPlugin(ScrollToPlugin);

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const CircleButton = styled.button`
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  transition:
    transform 0.2s,
    background-color 0.2s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: 1px solid #f1f1f1;
  &:hover {
    transform: scale(1.1);
  }
  &.selected {
    background-color: white;
    color: pink;
  }
  &::after {
    content: '✔';
    display: none;
  }
  &.selected::after {
    display: block;
  }
  &:nth-child(1),
  &:nth-child(5) {
    width: 60px;
    height: 60px;
    &::after {
      font-size: 1.5em;
    }
  }
  &:nth-child(2),
  &:nth-child(4) {
    width: 50px;
    height: 50px;
    &::after {
      font-size: 1.2em;
    }
  }
  &:nth-child(3) {
    width: 40px;
    height: 40px;
    &::after {
      font-size: 1em;
    }
  }
`;

type SelectedOptionsType = { [key: string]: string };
type StringCanvasProps = {
  amplitude: number;
  frequency: number;
  speed: number;
};

type QuestionnaireProps = {
  testId: string;
  limit: number;
};

export const Questionnaire: React.FC<QuestionnaireProps> = ({
  testId,
  limit,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsType>(
    {},
  );
  const [stringCanvasProps, setStringCanvasProps] = useState<{
    [key: string]: StringCanvasProps;
  }>({});
  const navigate = useNavigate();
  const [submitAnswers] = useSubmitAnswersMutation();

  const {
    data: questions,
    isLoading,
    error,
  } = useGetQuestionsQuery({ testId, limit });

  const handleSelect = (questionId: string, option: string) => {
    if (selectedOptions[questionId] !== option) {
      setSelectedOptions((prev) => ({ ...prev, [questionId]: option }));
      setStringCanvasProps((prev) => ({
        ...prev,
        [questionId]: { amplitude: 10, frequency: 4, speed: 0.2 },
      }));

      // Always scroll down after selecting an option
      gsap.to(window, {
        duration: 0.5,
        scrollTo: { y: window.scrollY + 465 },
      });
    }
  };

  const handleSubmit = async () => {
    if (!questions) return;

    const unansweredQuestion = questions.find(
      (question) => !selectedOptions[question._id],
    );

    if (unansweredQuestion) {
      const element = document.getElementById(
        `question-${unansweredQuestion._id}`,
      );
      if (element && element.offsetTop < window.scrollY) {
        gsap.to(window, {
          duration: 0.5,
          scrollTo: { y: element.offsetTop + 455 },
        });
        return;
      }

      const { toast } = await import('react-hot-toast');
      toast.success('Welcome to the app!');
      toast.error('Please answer all questions');
      return;
    }

    try {
      const answers = questions.map((question) => ({
        questionId: question._id,
        answer: selectedOptions[question._id],
      }));

      const userId = '671e6877c25a8103e39c3bbf'; // Replace with actual userId retrieval
      console.log('Answers submitted :', userId, testId, answers);
      const result = await submitAnswers({
        userId,
        testId, // Use the testId from props
        answers,
      }).unwrap();
      console.log('Answers submitted successfully:', result);
      navigate(getRouteResults(testId, userId));
    } catch (error) {
      console.error('Error submitting answers:', error);
      const { toast } = await import('react-hot-toast');
      toast.error('Error submitting answers');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading questions</div>;

  return (
    <StyledContainer>
      {questions &&
        questions.map((question) => (
          <VStack
            align="center"
            key={question._id}
            id={`question-${question._id}`}
          >
            <Text h3 margin="85px 0 45px 0">
              {question.text}
            </Text>
            <HStack gap="32" justify="center" align="center">
              <Text margin="0 0 7px" h3>
                {question.options[0]}
              </Text>
              <HStack gap="32" justify="center" align="center">
                {question.options.map(
                  (option: string, index: React.Key | null | undefined) => (
                    <CircleButton
                      key={index}
                      className={
                        selectedOptions[question._id] === option
                          ? 'selected'
                          : ''
                      }
                      onClick={() => handleSelect(question._id, option)}
                    ></CircleButton>
                  ),
                )}
              </HStack>
              <Text margin="0 0 5px" h4>
                {question.options[question.options.length - 1]}
              </Text>
            </HStack>
            <StringCanvas
              height={100}
              animated3={stringCanvasProps[question._id]}
            />
          </VStack>
        ))}
      <Button
        variant="secondary"
        margin="170px 0 330px 0"
        onClick={handleSubmit}
      >
        NEXT
      </Button>
    </StyledContainer>
  );
};
