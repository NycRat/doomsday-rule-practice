export function getRandomDate(start: Date, end: Date) {
  const startDate = start.getTime(); // Get time in milliseconds
  const endDate = end.getTime(); // Get time in milliseconds

  // Calculate a random time between start and end dates
  const randomTime = startDate + Math.random() * (endDate - startDate);

  const randomDate = new Date(randomTime);

  return randomDate;
}
