import { useState } from 'react';
import ReactDOM from 'react-dom';
import dayjs, { Dayjs } from 'dayjs';

import { DatePicker } from './components/DatePicker';

const App = () => {
  const [date, setDate] = useState<Dayjs | null>(dayjs());

  const handleDateChange = (date: Dayjs | null) => {
    setDate(date);
  };

  return <DatePicker selectedDate={date} onChangeDate={handleDateChange} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
