import { useState } from 'react';
import { FieldError } from 'react-hook-form';

import styles from './calendar.module.scss';

type InputProps = {
  onChange: (value: Date) => void;
  error?: FieldError;
};

const getDaysInMonth = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  return new Date(year, month + 1, 0).getDate();
};

const addMonths = (date: Date, months: number) => {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() + months);
  return newDate;
};

const subMonths = (date: Date, months: number) => {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() - months);
  return newDate;
};

const isSunday = (date: Date) => {
  return date.getDay() === 0;
};

const isPast = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
};

const formatDate = (date: Date, format: string) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  if (format === 'MMMM yyyy') {
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  }
  if (format === 'd') {
    return date.getDate().toString();
  }
  return date.toString();
};

const getDaysArray = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const startingDay = firstDay.getDay() || 7; // Convert Sunday (0) to 7
  const daysInMonth = getDaysInMonth(date);
  const days: Date[] = [];

  // Add empty days for padding before the first day
  for (let i = 1; i < startingDay; i++) {
    const prevDate = new Date(year, month, 1 - i);
    days.unshift(prevDate);
  }

  // Add actual days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i));
  }

  // Add remaining days to complete the grid
  const remainingDays = 42 - days.length; // 6 rows * 7 columns
  for (let i = 1; i <= remainingDays; i++) {
    days.push(new Date(year, month + 1, i));
  }

  return days;
};

export default function Calendar({ onChange, error }: InputProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
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
    <div aria-description="calendar">
      <div className={styles.header}>
        <button
          className={styles.arrow}
          type="button"
          onClick={handlePrevMonth}
        >
          {'<'}
        </button>
        <span>{formatDate(currentDate, 'MMMM yyyy')}</span>
        <button
          className={styles.arrow}
          type="button"
          onClick={handleNextMonth}
        >
          {'>'}
        </button>
      </div>
      <div className={styles.calendarWrapper}>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
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
          >
            {formatDate(day, 'd')}
          </button>
        ))}
      </div>

      {error && <div className={styles.error}>{error?.message}</div>}
    </div>
  );
}
