import { DateDisplayMode, InputMode, Options, Record, Weekday } from "./models";

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
    startTime: new Date(),
    endTime: new Date(),
    targetDate: randomDate,
    givenAnswer: Weekday.Sunday,
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
    startTime: new Date(record.startTime),
    endTime: new Date(record.endTime),
    targetDate: new Date(record.targetDate),
    givenAnswer: record.givenAnswer,
  }));
  return parsed_stored_records;
}

export function getStoredOptions(): Options {
  let stored_records = window.localStorage.getItem("options");
  if (!stored_records) {
    return {
      inputMode: InputMode.TextInput,
      dateDisplayMode: DateDisplayMode.YYYYMMDD,
      blindTime: 0,
    };
  }
  return {
    inputMode: InputMode.TextInput,
    dateDisplayMode: DateDisplayMode.YYYYMMDD,
    blindTime: 0,
    ...JSON.parse(stored_records),
  };
}

export function getFormattedDate(date: Date, format: DateDisplayMode): string {
  console.log(DateDisplayMode[format]);
  const year = date.toISOString().slice(0, 4);
  const month = date.toISOString().slice(5, 7);
  const day = date.toISOString().slice(8, 10);

  switch (format) {
    case DateDisplayMode.YYYYMMDD:
      return year + "-" + month + "-" + day;
    case DateDisplayMode.DDMMYYYY:
      return day + "-" + month + "-" + year;
    case DateDisplayMode.MMDDYYYY:
      return month + "-" + day + "-" + year;
    case DateDisplayMode.MonthDDYYYY:
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
  }
}
