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
}
