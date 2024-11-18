import React, { lazy, Suspense, useState } from 'react';

const QuestionSelectionModal = lazy(
  () => import('@/features/Test/ui/QuestionSelectionModal'),
);

interface ModalTriggerWrapperProps {
  children: React.ReactNode;
  type: string;
}

export const ModalTriggerWrapper: React.FC<ModalTriggerWrapperProps> = ({
  children,
  type,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSelect = (numQuestions: number) => {
    console.log(`Selected ${numQuestions} questions for ${type}`);
    setModalOpen(false);
  };

  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div onClick={handleClick}>{children}</div>
      <Suspense fallback={<div>Loading...</div>}>
        <QuestionSelectionModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSelect={handleSelect}
        />
      </Suspense>
    </>
  );
};
