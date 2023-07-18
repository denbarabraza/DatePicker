import { useState } from 'react';
import ReactDOM from 'react-dom';
import dayjs, { Dayjs } from 'dayjs';

import { DatePicker } from './components/DatePicker';

const App = () => {
  const [date, setDate] = useState(dayjs());

  const handleDateChange = (date: Dayjs) => {
    setDate(date);
  };

  return <DatePicker selectedDate={date} onChange={handleDateChange} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
