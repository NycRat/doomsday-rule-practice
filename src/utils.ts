import { Record, Weekday } from "./models";

export function getRandomDate(start: Date, end: Date) {
  const startDate = start.getTime(); // Get time in milliseconds
  const endDate = end.getTime(); // Get time in milliseconds

  // Calculate a random time between start and end dates
  const randomTime = startDate + Math.random() * (endDate - startDate);

  const randomDate = new Date(randomTime);

  return randomDate;
}

export function getNewRecord(): Record {
  const startDate = new Date("0001-01-01");
  const endDate = new Date("3000-12-31");

  let randomDate = getRandomDate(startDate, endDate);

  randomDate.setHours(0, 0, 0, 0);

  return {
    start_time: new Date(),
    end_time: new Date(),
    target_date: randomDate,
    given_answer: Weekday.Sunday,
  };
}

export function getTimeDiffInSeconds(a: Date, b: Date): number {
  return (b.getTime() - a.getTime()) / 1000;
}

export function getStoredRecords(): Record[] {
  let stored_records = window.localStorage.getItem("records");
  if (!stored_records) {
    return [];
  }
  let thingy: Record[] = JSON.parse(stored_records);

  let parsed_stored_records: Record[] = thingy.map((record) => ({
    start_time: new Date(record.start_time),
    end_time: new Date(record.end_time),
    target_date: new Date(record.target_date),
    given_answer: record.given_answer,
  }));
  return parsed_stored_records;
}
