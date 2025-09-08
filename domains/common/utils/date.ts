import dayjs from 'dayjs';

export const formatDate = (dateNumber: number) => {
  const dateStr = dateNumber.toString();
  const date = dayjs(dateStr);
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const day = days[date.day()];
  return `${date.format('YY.MM.DD')}(${day})`;
};
