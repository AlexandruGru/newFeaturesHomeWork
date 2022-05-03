//-----------------------ex1----------------------
const duplicates = (arr) => {
  const unique = new Set(arr);
  return unique.size !== arr.length;
};
console.log(duplicates([1, 2, 3, 1]));
console.log(duplicates([1, 2, 3, 4]));
console.log(duplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

// ----------------------ex2----------------------
import { Temporal } from "@js-temporal/polyfill";

const htmlTime = document.querySelector(".time");
const inputDate = document.querySelector(".input-date");
const submitTime = document.querySelector(".submitTime");

submitTime.addEventListener("click", (ev) => {
  ev.preventDefault();
  const year = Temporal.Now.plainDateTimeISO().year;
  const month = Temporal.Now.plainDateTimeISO().month;
  const day = Temporal.Now.plainDateTimeISO().day;
  const hours = inputDate.value.slice(0, 2);
  const minutes = inputDate.value.slice(3, 5);
  let settedTime = new Temporal.PlainDateTime(
    year,
    month,
    day,
    hours,
    minutes
  );
  let testUntil = Temporal.Now.plainDateTimeISO().until(settedTime)
  if (testUntil.sign === -1) {
    settedTime = new Temporal.PlainDateTime(year, month, day + 1, hours, minutes)
  }
  const timer = setInterval(() => {
    const now = Temporal.Now.plainDateTimeISO().round("seconds");
    const until = now.until(settedTime);
    htmlTime.textContent = `Till the setted time remains: ${until.hours}:${until.minutes}:${until.seconds}`;
    if (until.sign === 0) {
      htmlTime.textContent = "You've reache the setted time";
      window.clearInterval(timer);
    }
  }, 1000);
});

// ----------------------ex3----------------------
// i don't have much experience in js or other programming languages to prpose something to add to js,
// but i'm sure there is a lot of sintactic sugar to add.
// the DOM operations are heavy and expensive to execute,
// may be there is needed to improve this aspects
