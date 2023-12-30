import { Record } from "./models";
import { getTimeDiffInSeconds } from "./utils";

function isCorrect(record: Record) {
  return record.given_answer === record.target_date.getDay();
}

export function getStatsSuccessRate(records: Record[]): string {
  let correct = 0;
  for (const record of records) {
    if (isCorrect(record)) {
      correct++;
    }
  }
  return ((correct / records.length) * 100).toFixed(2) + "%";
}

export function getStatsAverageTime(
  records: Record[],
  correctOnly?: boolean,
): string {
  let totalTime = 0;
  let totalRecords = 0;
  for (const record of records) {
    if (correctOnly) {
      if (isCorrect(record)) {
        totalTime += getTimeDiffInSeconds(record.start_time, record.end_time);
        totalRecords++;
      }
    } else {
      totalTime += getTimeDiffInSeconds(record.start_time, record.end_time);
      totalRecords++;
    }
  }
  return (totalTime / totalRecords).toFixed(2) + "s";
}
