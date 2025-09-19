import  dayjs  from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js"


function time() {
  let now = dayjs()
  const date = now.format('h:mm:ss a')
  console.log(date)
  document.querySelector('.js-clock').innerHTML = date;
}
time()
setInterval(time, 1000);


function date() {
  let now = dayjs()
  const date = now.format('dddd, D MMMM YYYY')
  console.log(date)
  document.querySelector('.js-date').innerHTML = date;
}
date()
setInterval(date, 1000);
