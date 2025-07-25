function calculateAge() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  let requiredErrorDay = document.getElementById("required-error-day");
  let requiredErrorMonth = document.getElementById("required-error-month");
  let requiredErrorYear = document.getElementById("required-error-year");
  let invDay = document.getElementById("invalid-day");
  let invMonth = document.getElementById("invalid-month");
  let invYear = document.getElementById("invalid-year");
  let yearResult = document.getElementById("year-result");
  let monthResult = document.getElementById("month-result");
  let dayResult = document.getElementById("day-result");

  if (typeof moment === "undefined") {
    alert("Библиотека moment.js не подключена.");
    return;
  }

  let birthDate = moment(`${year}-${month}-${day}`, "YYYY-MM-DD");

  let today = moment();

  let flag = true;

  if (!day) {
    requiredErrorDay.classList.add("error");
    flag = false;
  } else if (
    day < 1 ||
    day > moment(`${year}-${month}`, "YYYY-MM").daysInMonth()
  ) {
    invDay.classList.add("error");
    flag = false;
  } else {
    invDay.classList.remove("error");
  }

  if (!month) {
    requiredErrorMonth.classList.add("error");
    flag = false;
  } else if (month < 1 || month > 12) {
    invMonth.classList.add("error");
    flag = false;
  } else {
    invMonth.classList.remove("error");
  }

  if (!year) {
    requiredErrorYear.classList.add("error");
    flag = false;
  } else if (year < 1900 || year > today.year()) {
    invYear.classList.add("error");
    flag = false;
  } else {
    invYear.classList.remove("error");
  }

  if (flag) {
    let ageYears = today.diff(birthDate, "years");
    let ageMonths = today.diff(birthDate, "months") % 12;
    let ageDays = today.diff(
      birthDate.add(ageYears, "years").add(ageMonths, "months"),
      "days"
    );

    yearResult.textContent = ageYears;
    monthResult.textContent = ageMonths;
    dayResult.textContent = ageDays;
  } else {
    yearResult.textContent = "--";
    monthResult.textContent = "--";
    dayResult.textContent = "--";
  }
}
