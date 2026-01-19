export const getInitialCurrentDate = (date: Date) => {
  // hardcode 15th day of the month for calendar stability during months changes (timezones might be an issue)
  const year = date.getFullYear();
  const month = date.getMonth();
  return new Date(Date.UTC(year, month, 15, 12, 0, 0, 0));
};

export const getDaysInMonth = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  return new Date(year, month + 1, 0).getDate();
};

export const addMonths = (date: Date, months: number) => {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() + months);
  return newDate;
};

export const subMonths = (date: Date, months: number) => {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() - months);
  return newDate;
};

export const isSunday = (date: Date) => {
  return date.getDay() === 0;
};

export const isPast = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
};

export const formatDate = (date: Date, format: string) => {
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
  return date;
};

export const getDaysArray = (date: Date) => {
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
