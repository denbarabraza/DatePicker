import { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import dayjs, { Dayjs } from 'dayjs';

import { DatePicker } from './components/DatePicker';

const App = () => {
  const [date, setDate] = useState<Dayjs>(dayjs());

  const handleDateChange = useCallback(
    (date: Dayjs) => {
      setDate(date);
    },
    [setDate],
  );

  return <DatePicker selectedDate={date} onChangeDate={handleDateChange} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
