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
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

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

type SelectedOptionsType = { [key: number]: string };
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

  const navigate = useNavigate();

  const handleSelect = (questionId: number, option: string) => {
    if (selectedOptions[questionId] !== option) {
      setSelectedOptions((prev) => ({ ...prev, [questionId]: option }));
      setStringCanvasProps((prev) => ({
        ...prev,
        [questionId]: { amplitude: 10, frequency: 4, speed: 0.2 },
      }));

      const firstUnanswered = currentQuestions.find(
        (question) => !selectedOptions[question.id],
      );

      if (firstUnanswered) {
        const element = document.getElementById(
          `question-${firstUnanswered.id}`,
        );
        if (element && element.offsetTop < window.scrollY) {
          gsap.to(window, {
            duration: 0.5,
            scrollTo: { y: window.scrollY - element.offsetTop },
          });
          return;
        }
      }

      gsap.to(window, {
        duration: 0.5,
        scrollTo: { y: window.scrollY + 330 },
      });
    }
  };

  const handleSubmit = async () => {
    const unansweredQuestion = currentQuestions.find(
      (question) => !selectedOptions[question.id],
    );

    if (unansweredQuestion) {
      const element = document.getElementById(
        `question-${unansweredQuestion.id}`,
      );
      if (element && element.offsetTop < window.scrollY) {
        gsap.to(window, {
          duration: 0.5,
          scrollTo: { y: element.offsetTop - 150 },
        });
        return;
      }

      const { toast } = await import('react-hot-toast');
      toast.success('Welcome to the app!');

      return;
    }

    localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
    console.log('Сохранено в localStorage:', selectedOptions);

    const newAnsweredIds = new Set(answeredIds);
    currentQuestions.forEach((question) => newAnsweredIds.add(question.id));
    setAnsweredIds(newAnsweredIds);

    const nextQuestions = getRandomQuestions(questionGroups, 2, newAnsweredIds);
    setCurrentQuestions(nextQuestions);

    if (nextQuestions.length > 0) {
      gsap.to(window, { duration: 0.5, scrollTo: { y: window.scrollY + 500 } });
    } else {
      navigate('/profile');
    }
  };

  return (
    <StyledContainer>
      {currentQuestions.map((question) => (
        <VStack align="center" key={question.id} id={`question-${question.id}`}>
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
          <StringCanvas
            height={100}
            animated3={stringCanvasProps[question.id]}
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
