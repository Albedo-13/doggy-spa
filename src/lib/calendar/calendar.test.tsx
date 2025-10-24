import { jest } from '@jest/globals';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Calendar from './calendar';
import {
  addMonths,
  formatDate,
  getDaysArray,
  getDaysInMonth,
  getInitialCurrentDate,
  isPast,
  isSunday,
  subMonths,
} from './calendar.utils';

describe('Calendar utils', () => {
  const octStart = new Date('Wed Oct 1 2025 00:00:00 GMT+0300');
  const octEnd = new Date('Wed Oct 31 2025 23:59:59 GMT+0300');
  const nov = new Date('Wed Nov 23 2025 12:00:00 GMT+0300');
  const feb28 = new Date('Wed Feb 14 2026 12:00:00 GMT+0300');
  const feb29 = new Date('Wed Feb 11 2024 12:00:00 GMT+0300');

  test('getInitialCurrentDate', () => {
    expect(getInitialCurrentDate(octStart)).toEqual(
      new Date('2025-10-15T09:00:00.000Z'),
    );
    expect(getInitialCurrentDate(octEnd)).toEqual(
      new Date('2025-10-15T09:00:00.000Z'),
    );
    expect(getInitialCurrentDate(nov)).toEqual(
      new Date('2025-11-15T09:00:00.000Z'),
    );
    expect(getInitialCurrentDate(feb28)).toEqual(
      new Date('2026-02-15T09:00:00.000Z'),
    );
    expect(getInitialCurrentDate(feb29)).toEqual(
      new Date('2024-02-15T09:00:00.000Z'),
    );
  });

  test('getDaysInMonth', () => {
    expect(getDaysInMonth(octStart)).toBe(31);
    expect(getDaysInMonth(octEnd)).toBe(31);
    expect(getDaysInMonth(nov)).toBe(30);
    expect(getDaysInMonth(feb28)).toBe(28);
    expect(getDaysInMonth(feb29)).toBe(29);
  });

  test('addMonths', () => {
    // addMonths and getInitialCurrentDate should be tested together to avoid "date jumps" (e.g. from 31.10.2025 to 01.12.2025)
    expect(addMonths(getInitialCurrentDate(octStart), 1)).toEqual(
      new Date('2025-11-15T09:00:00.000Z'),
    );
    expect(addMonths(getInitialCurrentDate(octEnd), 1)).toEqual(
      new Date('2025-11-15T09:00:00.000Z'),
    );
    expect(addMonths(getInitialCurrentDate(nov), 1)).toEqual(
      new Date('2025-12-15T09:00:00.000Z'),
    );
    expect(addMonths(getInitialCurrentDate(feb28), 1)).toEqual(
      new Date('2026-03-15T09:00:00.000Z'),
    );
    expect(addMonths(getInitialCurrentDate(feb29), 1)).toEqual(
      new Date('2024-03-15T09:00:00.000Z'),
    );
  });

  test('subMonths', () => {
    // subMonths and getInitialCurrentDate should be tested together to avoid "date jumps" (e.g. from 31.10.2025 to 01.12.2025)
    expect(subMonths(getInitialCurrentDate(octStart), 1)).toEqual(
      new Date('2025-09-15T09:00:00.000Z'),
    );
    expect(subMonths(getInitialCurrentDate(octEnd), 1)).toEqual(
      new Date('2025-09-15T09:00:00.000Z'),
    );
    expect(subMonths(getInitialCurrentDate(nov), 1)).toEqual(
      new Date('2025-10-15T09:00:00.000Z'),
    );
    expect(subMonths(getInitialCurrentDate(feb28), 1)).toEqual(
      new Date('2026-01-15T09:00:00.000Z'),
    );
    expect(subMonths(getInitialCurrentDate(feb29), 1)).toEqual(
      new Date('2024-01-15T09:00:00.000Z'),
    );
  });

  test('isSunday', () => {
    expect(isSunday(octStart)).toBeFalsy();
    expect(isSunday(octEnd)).toBeFalsy();
    expect(isSunday(nov)).toBeTruthy();
    expect(isSunday(feb28)).toBeFalsy();
    expect(isSunday(feb29)).toBeTruthy();
  });

  test('isPast', () => {
    expect(isPast(new Date('Wed Oct 1 2035 12:00:00 GMT+0300'))).toBeFalsy();
    expect(isPast(octStart)).toBeTruthy();
    expect(isPast(feb29)).toBeTruthy();
  });

  test('formatDate', () => {
    expect(formatDate(octStart, 'MMMM yyyy')).toBe('October 2025');
    expect(formatDate(octEnd, 'MMMM yyyy')).toBe('October 2025');
    expect(formatDate(nov, 'MMMM yyyy')).toBe('November 2025');
    expect(formatDate(feb28, 'MMMM yyyy')).toBe('February 2026');
    expect(formatDate(feb29, 'MMMM yyyy')).toBe('February 2024');

    expect(formatDate(octStart, 'd')).toBe('1');
    expect(formatDate(octEnd, 'd')).toBe('31');
    expect(formatDate(nov, 'd')).toBe('23');

    expect(formatDate(octStart, 'wrong format')).toBe(octStart);
  });

  test('getDaysArray', () => {
    expect(getDaysArray(octStart)).toHaveLength(42);
    expect(getDaysArray(octStart)[0]).toEqual(
      new Date('2025-09-28T21:00:00.000Z'),
    );
    expect(getDaysArray(octStart)[41]).toEqual(
      new Date('2025-11-08T21:00:00.000Z'),
    );

    expect(getDaysArray(octEnd)).toHaveLength(42);
    expect(getDaysArray(octEnd)[0]).toEqual(
      new Date('2025-09-28T21:00:00.000Z'),
    );
    expect(getDaysArray(octEnd)[41]).toEqual(
      new Date('2025-11-08T21:00:00.000Z'),
    );

    expect(getDaysArray(feb28)).toHaveLength(42);
    expect(getDaysArray(feb28)[0]).toEqual(
      new Date('2026-01-25T21:00:00.000Z'),
    );
    expect(getDaysArray(feb28)[41]).toEqual(
      new Date('2026-03-07T21:00:00.000Z'),
    );
  });
});

// ошибка если не выбран компонент, смена месяцев (вперед назад), смена года (вперед назад), получится ли затестить выбор компонента?
// props test
describe('Calendar component', () => {
  test('Should be rendered', () => {
    render(<Calendar onChange={jest.fn()} />);

    expect(screen.getByTestId('calendar')).toBeInTheDocument();
    expect(screen.getByTestId('calendar-header')).toBeInTheDocument();
    expect(screen.getAllByText(/Mon|Tue|Wed|Thu|Fri|Sat|Sun/)).toHaveLength(7);
    expect(screen.getAllByTestId('calendar-date')[0]).toBeDisabled();
    expect(screen.getAllByTestId('calendar-date')[41]).toBeDisabled();
  });

  test('Should change to next month on arrow click', async () => {
    render(<Calendar onChange={jest.fn()} />);

    const now = getInitialCurrentDate(new Date());
    const currentHeaderDate = formatDate(now, 'MMMM yyyy');

    const nextMonthButton = screen.getByTestId('calendar-next-month');
    const nextHeaderDate = formatDate(addMonths(now, 1), 'MMMM yyyy');

    expect(screen.getByTestId('calendar-month-year')).toHaveTextContent(
      String(currentHeaderDate),
    ); // current month from calendar header

    await userEvent.click(nextMonthButton);
    expect(screen.getByTestId('calendar-month-year')).toHaveTextContent(
      String(nextHeaderDate),
    );
  });

  test('Should change to prev month on arrow click', async () => {
    render(<Calendar onChange={jest.fn()} />);

    const now = getInitialCurrentDate(new Date());
    const currentHeaderDate = formatDate(now, 'MMMM yyyy');

    const prevMonthButton = screen.getByTestId('calendar-prev-month');
    const prevHeaderDate = formatDate(subMonths(now, 1), 'MMMM yyyy');

    expect(screen.getByTestId('calendar-month-year')).toHaveTextContent(
      String(currentHeaderDate),
    ); // current month from calendar header

    await userEvent.click(prevMonthButton);
    expect(screen.getByTestId('calendar-month-year')).toHaveTextContent(
      String(prevHeaderDate),
    );
  });

  test('Should select date on click', async () => {
    const onChangeMock = jest.fn();
    render(<Calendar onChange={onChangeMock} />);

    const nextMonthButton = screen.getByTestId('calendar-next-month');
    await userEvent.click(nextMonthButton); // change month to next for correct testing (all days enabled)

    await userEvent.click(screen.getAllByTestId('calendar-date')[7]); // Mon of the next month
    await userEvent.click(screen.getAllByTestId('calendar-date')[8]); // Tue
    await userEvent.click(screen.getAllByTestId('calendar-date')[9]); // Wed
    await userEvent.click(screen.getAllByTestId('calendar-date')[10]); // Thu
    await userEvent.click(screen.getAllByTestId('calendar-date')[11]); // Fri
    await userEvent.click(screen.getAllByTestId('calendar-date')[12]); // Sat
    await userEvent.click(screen.getAllByTestId('calendar-date')[13]); // Sundays are disabled by default

    expect(onChangeMock).toHaveBeenCalledTimes(6); // 6 days of week are working days, sunday is a weekend and disabled
  });

  test('Should show error if error prop is passed', () => {
    render(
      <Calendar
        onChange={jest.fn()}
        error={{ type: '', message: 'error message' }}
      />,
    );

    expect(screen.getByText('error message')).toBeInTheDocument();
  });
});
