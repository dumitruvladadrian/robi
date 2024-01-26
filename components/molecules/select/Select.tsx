import React, { useState } from 'react';
import s from './select.module.scss';
import { Icon } from 'components/atoms/Icon/Icon';

interface SelectInterfaceProps {
  preSelectedItemId?: string | number,
  options: Array<{ id: string | number, label: React.ReactElement }>;
}

export const Select = ({ options, preSelectedItemId }: SelectInterfaceProps) => {

  const [isOpen, setOpen] = useState<boolean>(false)
  const [selectedOptionId, setSelectedOptionID] = useState<number | string | undefined>(preSelectedItemId ?? undefined)

  // @ts-ignore
  const getOptionById = (id: number | string) => options.find((option) => option.id === id)?.label;


  return (
    <div
      className={s.selectContainer}
      tabIndex={0}
      onBlur={() => setOpen(false)}
    >
      <div
        onClick={() => setOpen(!isOpen)}
        className={s.selectButton}>
        {selectedOptionId === undefined ? 'Select' : getOptionById(selectedOptionId)}
        <div className={`${s.arrow} ${isOpen && s.flipped}`}>
          <Icon name='arrow_down' width={18} height={18}/>
        </div>
      </div>
      {isOpen && <ul className={s.optionsContainer}>
        {
          options?.map((child) =>
            <li
              key={child.id}
              onClick={() => {
                console.log('clicked ' + child.id);
                setSelectedOptionID(child.id);
                setOpen(false);
              }
              }>
              {child.label}
            </li>)
        }
      </ul>}
    </div>
  );
}


