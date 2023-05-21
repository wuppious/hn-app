export function getHostname(url: string) {
  return new URL(url).hostname;
}

const MINUTE = 60;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;

const RTF = new Intl.RelativeTimeFormat("en");

/**
 *
 * @param time Seconds elapsed since the epoch
 * @returns A string representing the item's age, for example "2 minutes ago"
 */
export function getItemAge(time: number) {
  const timeDifference = Date.now() / 1000 - time;

  if (MINUTE <= timeDifference && timeDifference < HOUR) {
    return RTF.format(Math.ceil(-timeDifference / MINUTE), "minute");
  } else if (HOUR <= timeDifference && timeDifference < DAY) {
    return RTF.format(Math.ceil(-timeDifference / HOUR), "hour");
  } else if (DAY <= timeDifference && timeDifference < WEEK) {
    return RTF.format(Math.ceil(-timeDifference / DAY), "day");
  } else if (WEEK <= timeDifference) {
    return RTF.format(Math.ceil(-timeDifference / WEEK), "week");
  } else {
    return "just now";
  }
}
