import React from 'react';
import styled from 'styled-components';
import { Modal } from '@/shared/ui/Modal/Modal';
import CustomLink from '@/shared/ui/AppLink/CustomLink';
import { getRouteTest } from '@/shared/const/router';

interface QuestionSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (numQuestions: number) => void;
}

const Button = styled.button`
  width: 80vw;
  height: 15vh;
  margin: 30px 0;
  font-size: 1.5rem;
  color: #fff;
  border: #fff 3px solid;
  border-radius: 30px;
`;

const QuestionSelectionModal: React.FC<QuestionSelectionModalProps> = ({
  isOpen,
  onClose,
  onSelect,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Button onClick={() => onSelect(30)}>
        <CustomLink animationType="pinkSquareUp" to={getRouteTest('mbti')}>
          30 Вопросов
        </CustomLink>
      </Button>
      <Button onClick={() => onSelect(60)}>
        <CustomLink to={getRouteTest('mbti')}>60 Вопросов</CustomLink>
      </Button>
      <Button onClick={() => onSelect(120)}>
        <CustomLink to={getRouteTest('mbti')}>120 Вопросов</CustomLink>
      </Button>
    </Modal>
  );
};

export default QuestionSelectionModal;
