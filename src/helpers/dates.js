import dayjs from 'dayjs';

/**
 * Should put dates only in ISO format
 */
export const getDiffernceFromCurrentDate = (date) => {
  const currentUnixDate = dayjs().unix();
  const receivedUnixDate = dayjs(date).unix();
  const defferenceBetweenDates = currentUnixDate - receivedUnixDate;

  return dayjs.unix(defferenceBetweenDates).toISOString();
};
