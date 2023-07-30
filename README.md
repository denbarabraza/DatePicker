# barabraza_daterange_picker

This library that provides built components for working with different calendars

It has two components: DatePicker and RangePicker...

## Demo

[Online demo](https://denbarabraza-picker.vercel.app) is also available! you can run demo on your local with:

- `git clone https://github.com/denbarabraza/DatePicker.git`
- `yarn && yarn run storybook`
- Visit http://localhost:6006/

## Getting started

### Compatibility

Your project needs to use React 16 or later. If you use older version of React.

### Installation

`npm install barabraza_daterange_picker`

`yarn add barabraza_daterange_picker`

## User guide

### DatePicker

- Calendar view;
- Ability to choose the beginning of the week;
- The ability to select the year /month for the calendar ;
- The ability to add a list of tasks when clicking on a certain day and save them to localStorage;
- Ability to hide/show weekends;
- The ability to switch in the calendar to the date entered by the user;
- Calendar styling.

Example:

``` jsx
import { DatePicker } from 'barabraza_daterange_picker';

export const App = () => {
const [date, setDate] = useState<Dayjs>(dayjs());

const handleDateChange = (date: Dayjs) => {
setDate(date);
};

return (
    <>
        <h4>Picked Date: {date?.format('DD - MMMM - YYYY')}</h4>
        <DatePicker selectedDate={date} onChangeDate={handleDateChange} />
    </>
    );
};
```

Props:

``` jsx
    selectedDate: Dayjs;
    onChangeDate: (date: Dayjs) => void
```

### RangePicker

- Calendar view;
- Selecting a range for the calendar;
- Ability to switch to the previous (th)/next (th) week/month/year;
- Ability to select the maximum calendar date;
- Ability to select the minimum date for the calendar;
- Calendar styling.

Example:

``` jsx
import { RangePicker } from 'barabraza_daterange_picker';

export const App = () => {
  const [date, setDate] = useState<Dayjs>(dayjs());
  const [rangeDays, setRangeDays] = useState<IRangeDateObj>({
    from: '',
    to: '',
  });

  const handleDateChange = (date: Dayjs) => {
    setDate(date);
  };
  const handleRangeDateChange = (date: IRangeDateObj) => {
    setRangeDays(date);
  };

  return (
    <>
      {rangeDays.from && rangeDays.to && (
        <h4>
          Range: {rangeDays.from} / {rangeDays.to}
        </h4>
      )}
      <RangePicker
        selectedDate={date}
        onChangeDate={handleDateChange}
        onChangeRange={handleRangeDateChange}
      />
    </>
  );
};
```

Props:

``` jsx
  selectedDate: Dayjs;
  onChangeDate: (date: Dayjs) => void;
  onChangeRange: (date: IRangeDateObj) => void;
```

Type:

``` jsx
interface IRangeDateObj {
  from: string;
  to: string;
}
```

### APIs

For [Date Picker](https://denbarabraza-picker.vercel.app/?path=/story/reactcomponentlibrary-datepicker--date-picker-stories)
and [Range Picker](https://denbarabraza-picker.vercel.app/?path=/story/reactcomponentlibrary-rangepicker--range-picker-stories).



