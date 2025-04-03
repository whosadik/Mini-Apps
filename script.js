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
  let today = new Date();
  let birthDate = new Date(year, month - 1, day);
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();
  let flag = true;
  requiredErrorDay.classList.add("hidden");
  requiredErrorMonth.classList.add("hidden");
  requiredErrorYear.classList.add("hidden");
  invDay.classList.add("hidden");
  invMonth.classList.add("hidden");
  invYear.classList.add("hidden");

  if (!day) {
    requiredErrorDay.classList.add("error");
    flag = false;
  } else if (day < 1 || day > new Date(year, month, 0).getDate()) {
    invDay.classList.add("error");
    flag = false;
  } else {
    invDay.classList.remove("error");
    flag = true;
  }

  if (!month) {
    requiredErrorMonth.classList.add("error");
    flag = false;
  } else if (month < 1 || month > 12) {
    invMonth.classList.add("error");
    flag = false;
  } else {
    invMonth.classList.remove("error");
    flag = true;
  }

  if (!year) {
    requiredErrorYear.classList.add("error");
    flag = false;
  } else if (year < 1900 || year > new Date().getFullYear()) {
    invYear.classList.add("error");
    flag = false;
  } else {
    invYear.classList.remove("error");
    flag = true;
  }
  if (day && month && year) {
    requiredErrorDay.classList.remove("error");
    requiredErrorMonth.classList.remove("error");
    requiredErrorYear.classList.remove("error");
  }

  if (flag == true) {
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    if (ageDays < 0) {
      let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      let prevMonthDays = prevMonth.getDate();

      ageDays += prevMonthDays;
      ageMonths--;
    }

    yearResult.textContent = ageYears;
    monthResult.textContent = ageMonths;
    dayResult.textContent = ageDays;
  } else {
    yearResult.textContent = "--";
    monthResult.textContent = "--";
    dayResult.textContent = "--";
  }
}
