export enum Weekday {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

export enum InputMode {
  TextInput,
  ButtonInput,
  TextButtonInput,
}

export enum DateDisplayMode {
  YYYYMMDD,
  DDMMYYYY,
  MMDDYYYY,
  MonthDDYYYY,
}

export interface Record {
  startTime: Date;
  endTime: Date;
  targetDate: Date;
  givenAnswer: Weekday;
}

export interface Options {
  inputMode: InputMode;
  blindTime: number;
  dateDisplayMode: DateDisplayMode;
}
