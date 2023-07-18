import { useState } from 'react';
import ReactDOM from 'react-dom';

import DatePicker from './components/DatePicker/DatePicker';

const App = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker selectedDate={selectedDate} onChange={handleDateChange} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
