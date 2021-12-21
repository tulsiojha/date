import Year from "./years.json"

// let Year:YearsObject = Years;

const Years: {[index: string]:any} = Year

export function isLeapYear(y:number) {
  if (y % 4 == 0) {
    if (y % 100 == 0) {
      if (y % 400 == 0) return true;
      else return false;
    } else return true;
  } else return false;
}

export function getNepaliDateFromEng(engYear:number, engMonth:number, engDay:number) {
  var englishMonthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var initialEngYear = 1944,
    initialNepYear = 2000;
  var initialNepMonth = 9;
  var initialNepDay = 17;

  var engYear = engYear;
  var engMonth = engMonth;
  var engDay = engDay;

  var totalEngDays = 0;
  for (let year = initialEngYear; year < engYear; year++) {
    for (let month = 0; month < englishMonthsDays.length; month++) {
      if (month != 1) {
        totalEngDays += englishMonthsDays[month];
      } else {
        if (isLeapYear(year)) {
          totalEngDays += 29;
        } else {
          totalEngDays += 28;
        }
      }
    }
  }

  for (let month = 0; month < engMonth - 1; month++) {
    if (month != 1) {
      totalEngDays += englishMonthsDays[month];
    } else {
      if (isLeapYear(engYear)) {
        totalEngDays += 29;
      } else {
        totalEngDays += 28;
      }
    }
  }

  totalEngDays += engDay;

  var totalNepDays = initialNepDay - 1 - 2;
  var tempNepYear = initialNepYear;
  var totalNepMonth = 0;
  let tempMonth = 9;

  loop: while (totalNepDays < totalEngDays) {
    for (let month = tempMonth; month < Years[tempNepYear].length; month++) {
      if (totalNepDays + Years[tempNepYear][month][1] < totalEngDays) {
        totalNepDays += Years[tempNepYear][month][1];
      } else {
        totalNepMonth = month;
        break loop;
      }
    }
    tempMonth = 0;

    tempNepYear++;
  }

  var totalDaysInMonth = Years[tempNepYear][totalNepMonth][1];
  var monthStart = Years[tempNepYear][totalNepMonth][0];
  var day = totalEngDays - totalNepDays;
  var weekDay = (monthStart + day - 1) % 7;

  return {
    year: tempNepYear,
    month: totalNepMonth,
    days: day,
    totalDays: totalDaysInMonth,
    monthStart: monthStart,
    weekDay: weekDay,
  };
}
