import React, { useState } from 'react';
import styled from 'styled-components';
import {
  extroversionIntroversionQuestions,
  sensingIntuitionQuestions,
  thinkingFeelingQuestions,
  judgingPerceivingQuestions,
} from '@/entities/Questions/questions';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StringCanvas } from '@/shared/ui/Strings/StringCanvas/StringCanvas';
import { Button } from '@/shared/ui/Button';

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

type SelectedOptionsType = {
  [key: number]: string;
};

type StringCanvasProps = {
  amplitude: number;
  frequency: number;
  speed: number;
};

const getRandomQuestions = (
  questionGroups: any[],
  countPerGroup: number,
  answeredIds: Set<number>,
) => {
  return questionGroups.flatMap((group) =>
    group
      .filter((question: { id: number }) => !answeredIds.has(question.id))
      .sort(() => 0.5 - Math.random())
      .slice(0, countPerGroup),
  );
};

export const Questionnaire = () => {
  const questionGroups = [
    extroversionIntroversionQuestions,
    sensingIntuitionQuestions,
    thinkingFeelingQuestions,
    judgingPerceivingQuestions,
  ];

  const [answeredIds, setAnsweredIds] = useState<Set<number>>(new Set());
  const [currentQuestions, setCurrentQuestions] = useState(() =>
    getRandomQuestions(questionGroups, 2, answeredIds),
  );

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsType>(
    {},
  );
  const [stringCanvasProps, setStringCanvasProps] = useState<{
    [key: number]: StringCanvasProps;
  }>(
    currentQuestions.reduce(
      (acc, question) => {
        acc[question.id] = { amplitude: 0, frequency: 0, speed: 0 };
        return acc;
      },
      {} as { [key: number]: StringCanvasProps },
    ),
  );

  const handleSelect = (questionId: number, option: string) => {
    if (selectedOptions[questionId] !== option) {
      setSelectedOptions((prev) => ({
        ...prev,
        [questionId]: option,
      }));

      setStringCanvasProps((prev) => ({
        ...prev,
        [questionId]: {
          amplitude: 17,
          frequency: 0.0005,
          speed: 15,
        },
      }));
    }
  };

  const handleSubmit = () => {
    localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
    console.log('Сохранено в localStorage:', selectedOptions);

    // Add current question IDs to the answered set
    const newAnsweredIds = new Set(answeredIds);
    currentQuestions.forEach((question) => newAnsweredIds.add(question.id));
    setAnsweredIds(newAnsweredIds);

    // Load the next set of questions
    setCurrentQuestions(getRandomQuestions(questionGroups, 2, newAnsweredIds));
  };

  return (
    <StyledContainer>
      {currentQuestions.map((question) => (
        <VStack align="center" key={question.id}>
          <Text margin="85px 0 45px 0" h3>
            {question.text}
          </Text>
          <HStack gap="32" justify="center" align="center">
            <Text margin="0 0 7px" h4>
              {question.options[0]}
            </Text>
            <HStack gap="32" justify="center" align="center">
              {question.options.map(
                (option: string, index: React.Key | null | undefined) => (
                  <CircleButton
                    key={index}
                    className={
                      selectedOptions[question.id] === option ? 'selected' : ''
                    }
                    onClick={() => handleSelect(question.id, option)}
                  ></CircleButton>
                ),
              )}
            </HStack>
            <Text margin="0 0 5px" h4>
              {question.options[question.options.length - 1]}
            </Text>
          </HStack>
          <StringCanvas animated3={stringCanvasProps[question.id]} />
        </VStack>
      ))}
      <Button onClick={handleSubmit}>next</Button>
    </StyledContainer>
  );
};
