'use client';
import { Minus, Plus } from 'lucide-react';
import React from 'react';
interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}
const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className={`p-5 lg:pl-10 ${openIndex === index ? 'mb-10 rounded-md bg-white shadow-2' : 'border-b border-black/10'}`}
        >
          <button
            className='flex w-full flex-1 focus:outline-none'
            onClick={() => toggleAccordion(index)}
          >
            <div className='flex flex-1 items-center justify-between gap-2 text-left text-black/60 duration-200 ease-in-out hover:text-primary'>
              <span className='flex flex-1 gap-2'>
                <span className='w-10 shrink-0 font-semibold lg:text-xl'>
                  {String(index + 1).padStart(2, '0')}.
                </span>
                <span className='font-semibold lg:text-xl'>{item.title}</span>
              </span>
              <span>
                {openIndex === index ? (
                  <Minus strokeWidth={3} />
                ) : (
                  <Plus strokeWidth={3} />
                )}
              </span>
            </div>
          </button>
          {openIndex === index && (
            <div className='pt-2 lg:pt-5'>
              <p className='leading-loose text-black/50'>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Accordion;
