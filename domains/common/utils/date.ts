import dayjs from 'dayjs';

export const formatDate = (dateNumber: string) => {
  const date = dayjs(dateNumber);
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const day = days[date.day()];
  return `${date.format('YY.MM.DD')}(${day})`;
};
