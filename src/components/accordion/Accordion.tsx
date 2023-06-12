import { ReactNode } from 'react';

type AccordionProps = {
  isOpened?: boolean;
  title: string | ReactNode;
};

export const Accordion = ({ isOpened = false, title }: AccordionProps) => {
  return (
    <div>
      <div className="flex justify-between w-full items-center">
        <div>{title}</div>
      </div>
    </div>
  );
};
