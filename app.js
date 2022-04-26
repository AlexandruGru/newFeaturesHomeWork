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

inputDate.addEventListener("change", (ev) => {
  const hours = ev.target.value.slice(0, 2);
  const minutes = ev.target.value.slice(3, 5);
  const settedTime = new Temporal.PlainTime(hours, minutes);
  const setTimeUntil = () => {
    let now = Temporal.Now.plainTimeISO().round("seconds");
    let until = now.until(settedTime);
    htmlTime.textContent = `Till the setted time remain: ${until.hours} hours ${until.minutes} minutes ${until.seconds} seconds`;
    setTimeout(setTimeUntil, 500);
  };
  setTimeUntil();
});

// ----------------------ex3----------------------
// i don't have much experience in js or other programming languages to decide what to add to js, 
// but i'm sure there is a lot of sintactic sugar to add.
// the DOM operations are heavy and expensive(computer resourses) to execute, 
// may be there is needed to improve this aspects