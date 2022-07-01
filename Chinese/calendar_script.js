const date = new Date();

var attendance = [
  new Date(2021, 9, 4),
  new Date(2021, 9, 13),
  new Date(2021, 9, 16),
  new Date(2021, 9, 18),
  new Date(2021, 9, 20),
  new Date(2021, 10, 7),
  new Date(2021, 10, 8),
  new Date(2021, 10, 14),
  new Date(2021, 10, 16),
  new Date(2021, 10, 21),
  new Date(2021, 10, 29),
  new Date(2021, 11, 5),
  new Date(2021, 11, 6),
  new Date(2021, 11, 24),
  new Date(2021, 11, 25),
  new Date(2021, 11, 26),
  new Date(2022, 0, 16),
  new Date(2022, 0, 20),
  new Date(2022, 0, 23),
  new Date(2022, 0, 29),
  new Date(2022, 1, 5),
  new Date(2022, 1, 21),
  new Date(2022, 2, 16),
  new Date(2022, 3, 16),
  new Date(2022, 3, 23),
  new Date(2022, 4, 16),
  new Date(2022, 4, 21),
  new Date(2022, 5, 5),
  new Date(2022, 5, 25),
  new Date(2022, 5, 30)
];

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ];

  function IsAttendance(i){
    for (const att of attendance){
      if (i === att.getDate() && 
          date.getMonth() === att.getMonth() &&
          date.getFullYear() === att.getFullYear()){
        
        return true;
      }
    }
    return false;
  }

  // TODO: for the 2 functions below, potential bug when year rolls over

  function IsAttendancePrev(i){
    for (const att of attendance){
      if (i === att.getDate() && 
          date.getMonth()-1 === att.getMonth() &&
          date.getFullYear() === att.getFullYear()){
        
        return true;
      }
    }
    return false;
  }

  function IsAttendanceNext(i){
    for (const att of attendance){
      if (i === att.getDate() && 
          date.getMonth()+1 === att.getMonth() &&
          date.getFullYear() === att.getFullYear()){
        
        return true;
      }
    }
    return false;
  }

  document.querySelector(".date h1").innerHTML = months[date.getMonth()] + " " + date.getFullYear();


  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    let d = prevLastDay - x + 1;
    if (IsAttendancePrev(d)){
      days += `<div class="prev-next-today">${d}</div>`;
    }
    else{
      days += `<div class="prev-date">${d}</div>`;
    }
  }

  for (let i = 1; i <= lastDay; i++) {
    if (IsAttendance(i)){
      days += `<div class="today">${i}</div>`;
    }
    else{
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    if (IsAttendanceNext(j)){
      days += `<div class="prev-next-today">${j}</div>`;
    }
    else{
      days += `<div class="next-date">${j}</div>`;
    }
    
  }
  monthDays.innerHTML = days;
};

renderCalendar();

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});
