import { DateDisplayMode, InputMode, Options, Record, Weekday } from "./models";

export function getRandomDate(start: Date, end: Date) {
  const startDate = start.getTime(); // Get time in milliseconds
  const endDate = end.getTime(); // Get time in milliseconds

  // Calculate a random time between start and end dates
  const randomTime = startDate + Math.random() * (endDate - startDate);
  console.log(endDate - startDate);

  const randomDate = new Date(randomTime);

  return randomDate;
}

export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(n, max));
}

export function getNewRecord(startYear: number, endYear: number): Record {
  startYear = clamp(startYear, 0, 99999);
  endYear = clamp(endYear, 0, 99999);
  if (startYear > endYear) {
    const t = startYear;
    startYear = endYear;
    endYear = t;
  }

  const startDate = new Date(`${startYear.toString().padStart(4, "0")}-01-01`);
  const endDate = new Date(`${endYear.toString().padStart(4, "0")}-12-31`);

  // console.log(startYear);
  // console.log(endYear);

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
  const default_options = {
    inputMode: InputMode.TextInput,
    dateDisplayMode: DateDisplayMode.YYYYMMDD,
    dateDisplaySlashes: true,
    blindTime: 0,
    dateRangeYearStart: 1,
    dateRangeYearEnd: 3000,
    textToSpeech: false,
  };
  if (!stored_records) {
    return default_options;
  }
  return {
    ...default_options,
    ...JSON.parse(stored_records),
  };
}

export function getFormattedDate(
  date: Date,
  format: DateDisplayMode,
  slashes: boolean,
): string {
  const year = date.toISOString().slice(0, 4);
  const month = date.toISOString().slice(5, 7);
  const day = date.toISOString().slice(8, 10);

  const s = slashes ? "/" : "-";

  switch (format) {
    case DateDisplayMode.YYYYMMDD:
      return year + s + month + s + day;
    case DateDisplayMode.DDMMYYYY:
      return day + s + month + s + year;
    case DateDisplayMode.MMDDYYYY:
      return month + s + day + s + year;
    case DateDisplayMode.MonthDDYYYY:
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
  }
}
