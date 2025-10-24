import { useState } from 'react';
import { FieldError } from 'react-hook-form';

import { DAYS_OF_WEEK } from '@/utils/constants';

import styles from './calendar.module.scss';
import {
  addMonths,
  formatDate,
  getDaysArray,
  getInitialCurrentDate,
  isPast,
  isSunday,
  subMonths,
} from './calendar.utils';

type InputProps = {
  onChange: (value: Date) => void;
  error?: FieldError;
};

export default function Calendar({ onChange, error }: InputProps) {
  const [currentDate, setCurrentDate] = useState(() =>
    getInitialCurrentDate(new Date()),
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const days = getDaysArray(currentDate);

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const isDateDisabled = (date: Date) => {
    return (
      isSunday(date) ||
      isPast(date) ||
      date.getMonth() !== currentDate.getMonth()
    );
  };

  const handleDateSelect = (date: Date) => {
    if (!isDateDisabled(date)) {
      setSelectedDate(date);
      onChange?.(date);
    }
  };

  return (
    <div aria-description="calendar" data-testid="calendar">
      <div className={styles.header} data-testid="calendar-header">
        <button
          className={styles.arrow}
          type="button"
          onClick={handlePrevMonth}
          data-testid="calendar-prev-month"
          aria-label='previous month'
        >
          {'<'}
        </button>
        <span data-testid='calendar-month-year'>{String(formatDate(currentDate, 'MMMM yyyy'))}</span>
        <button
          className={styles.arrow}
          type="button"
          onClick={handleNextMonth}
          data-testid="calendar-next-month"
          aria-label='next month'
        >
          {'>'}
        </button>
      </div>
      <div className={styles.calendarWrapper}>
        {DAYS_OF_WEEK.map((day) => (
          <div key={day}>{day}</div>
        ))}
        {days.map((day) => (
          <button
            type="button"
            key={day.toString()}
            disabled={isDateDisabled(day)}
            onClick={() => {
              handleDateSelect(day);
            }}
            className={styles.calendarItem}
            style={{
              backgroundColor:
                selectedDate?.toDateString() === day.toDateString()
                  ? '#e89b93'
                  : 'transparent',
            }}
            data-testid='calendar-date'
          >
            {String(formatDate(day, 'd'))}
          </button>
        ))}
      </div>

      {error && <div className={styles.error}>{error?.message}</div>}
    </div>
  );
}
