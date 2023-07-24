import { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import dayjs, { Dayjs } from 'dayjs';

import { DatePicker } from './components/DatePicker';
import { IObj } from './components/DatePicker/interfaces';
import { RangePicker } from './components/RangePicker';

const App = () => {
  const [date, setDate] = useState<Dayjs>(dayjs());

  const handleDateChange = useCallback(
    (date: Dayjs) => {
      setDate(date);
    },
    [setDate],
  );

  const handleRangeDateChange = (date: IObj) => {
    console.log(`from: ${date.from}, to:${date.to}`);
  };

  return (
    <>
      <DatePicker selectedDate={date} onChangeDate={handleDateChange} />
      <RangePicker
        selectedDate={date}
        onChangeDate={handleDateChange}
        onChangeRange={handleRangeDateChange}
      />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
