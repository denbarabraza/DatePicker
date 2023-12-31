import React, { ChangeEvent, FC, KeyboardEvent, memo, useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { CalendarIcon } from '@/assets/CalendarIcon';
import { DeleteIcon } from '@/assets/DeleteIcon';
import { InputEnum } from '@/constants/enums';
import { FormatEnum } from '@/constants/formatDate';

import { ICustomInput } from './interface';
import { CalIcon, Container, DelIcon, InputContainer, InputItem } from './styled';

export const CustomInput: FC<ICustomInput> = memo(
  ({
    type,
    onChooseDate,
    date,
    taskValue,
    setTaskValue,
    placeholder,
    setTaskInCalendar,
  }) => {
    const [chooseDate, setChooseDate] = useState<string>('');
    const ruleDateInput = type === InputEnum.Date;

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
      if (ruleDateInput) {
        setChooseDate(event.target.value);
      }
      if (!ruleDateInput && setTaskValue) {
        setTaskValue(event.currentTarget.value);
      }
    };

    const onKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        if (ruleDateInput && onChooseDate) {
          onChooseDate(dayjs(chooseDate.trim()));
        }
        if (!ruleDateInput && setTaskValue && setTaskInCalendar) {
          setTaskInCalendar();
          setTaskValue('');
        }
      }
    };

    const onClickDel = () => {
      setChooseDate('');
    };

    useEffect(() => {
      if (date) {
        setChooseDate(date.format(FormatEnum.YearMonthDayFormat));
      } else {
        setChooseDate('');
      }
    }, [date, setChooseDate]);

    return (
      <Container ruleDateInput={ruleDateInput} data-cy='inputItem'>
        <InputContainer>
          {ruleDateInput ? (
            <>
              <CalIcon>
                <CalendarIcon />
              </CalIcon>
              <InputItem
                type='text'
                placeholder={placeholder}
                value={chooseDate}
                onChange={onChangeInput}
                onKeyUp={onKeyUp}
              />
              <DelIcon onClick={onClickDel} data-cy='delIcon'>
                <DeleteIcon />
              </DelIcon>
            </>
          ) : (
            <InputItem
              type='text'
              data-cy='inputItemTask'
              placeholder={placeholder}
              value={taskValue}
              onChange={onChangeInput}
              onKeyUp={onKeyUp}
            />
          )}
        </InputContainer>
      </Container>
    );
  },
);
