function dDayCalculate() {
  const date = document.getElementById("date").value;
  const date1 = new Date(date);
  const endDate = new Date("2023-07-25");

  endDateReal = endDate.getTime();
  date1Real = date1.getTime();
  const dDay = endDateReal - date1Real;
  const dDayReal = Math.floor(dDay/(1000*60*60*24));
  document.getElementById("value").innerHTML = `${dDayReal}일`;
}