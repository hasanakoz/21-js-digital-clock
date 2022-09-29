const hourArea = document.querySelector(".hour");
const minuteArea = document.querySelector(".minute");
const secondArea = document.querySelector(".second");

const yearArea = document.querySelector(".year");
const monthArea = document.querySelector(".month");
const dayArea = document.querySelector(".day");
let year;
let month;
let day;
console.log(day);

let hour;
let minute;
let second;
setInterval(() => {
  second = new Date().getSeconds();
  second < 10
    ? (secondArea.innerHTML = `:0${second}`)
    : (secondArea.innerHTML = `:${second}`);
}, 1000);

setInterval(() => {
  minute = new Date().getMinutes();
  minuteArea.innerHTML = `:${minute}`;
}, 1000);

setInterval(() => {
  hour = new Date().getHours();
  hour < 10
    ? (hourArea.innerHTML = `0${hour}`)
    : (hourArea.innerHTML = `${hour}`);
}, 1000);

setInterval(() => {
  day = new Date().getDate();
  day < 10 ? (dayArea.innerHTML = `0${day}`) : (dayArea.innerHTML = `${day}`);
}, 1000);

setInterval(() => {
  month = new Date().getMonth();
  month < 10
    ? (monthArea.innerHTML = `:0${month}`)
    : (monthArea.innerHTML = `:${month}`);
}, 1000);

setInterval(() => {
  year = new Date().getFullYear();
  yearArea.innerHTML = `:${year}`;
}, 1000);
