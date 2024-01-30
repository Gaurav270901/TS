//Define an enum for days of the week. Create a function that takes a day as a parameter and logs a message based on the day.
enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
function logDayMessage(day: DayOfWeek): void {
  switch (day) {
    case DayOfWeek.Monday:
      console.log("It's Monday!");
      break;
    case DayOfWeek.Tuesday:
      console.log("It's Tuesday!");
      break;
    case DayOfWeek.Wednesday:
      console.log("It's Wednesday!");
      break;
    case DayOfWeek.Thursday:
      console.log("It's Thursday!");
      break;
    case DayOfWeek.Friday:
      console.log("It's Friday!");
      break;
    case DayOfWeek.Saturday:
      console.log("It's Saturday!");
      break;
    case DayOfWeek.Sunday:
      console.log("It's Sunday!");
      break;
    default:
      console.log("Invalid day");
  }
}
logDayMessage(DayOfWeek.Wednesday);
logDayMessage(3);
