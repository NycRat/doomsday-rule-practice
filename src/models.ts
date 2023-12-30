export enum Weekday {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

export interface Record {
  start_time: Date;
  end_time: Date;
  target_date: Date;
  given_answer: Weekday;
}
