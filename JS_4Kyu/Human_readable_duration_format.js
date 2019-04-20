// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// format_duration(62)    # returns "1 minute and 2 seconds"
// format_duration(3662)  # returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration(seconds) {
  let minutes = 0;
  let hours = 0;
  let days = 0;
  let years = 0;
  let str = "";

  let yearsFunc = () => {
    years = Math.floor(days / 365);
    days -= 365 * years;
    if (days > 0 && years == 1) {
      str += years + " year, ";
    } else if (days > 0) {
      str += years + " years, ";
    } else {
      str += years + " year";
    }
  };
  let daysFunc = () => {
    days = Math.floor(hours / 24);
    hours -= 24 * days;
    if (days > 365) {
      yearsFunc();
    }
    if (hours > 0) {
      str += days + " days, ";
    } else {
      str += days + " day";
    }
  };
  let hoursFunc = () => {
    hours = Math.floor(minutes / 60);
    minutes -= 60 * hours;
    if (hours > 24) {
      daysFunc();
    }
    if (minutes > 0 && hours == 1) {
      str += hours + " hour, ";
    } else if (days > 0 && hours > 1 && seconds > 0) {
      str += hours + " hours, ";
    } else if (minutes > 0) {
      str += hours + " hours and ";
    } else {
      str += hours + " hour";
    }
  };
  let minutesFunc = () => {
    if (seconds == 0) {
      str += "now";
    } else {
      if (seconds >= 60) {
        minutes = Math.floor(seconds / 60);
        seconds -= 60 * minutes;
        if (minutes >= 60) {
          hoursFunc();
        }
        if (seconds > 0 && minutes == 1) {
          str += minutes + " minute and ";
        } else if (seconds > 0) {
          str += minutes + " minutes and ";
        } else if (minutes > 0) {
          str += minutes + " minutes";
        }
      }
    }
  };
  minutesFunc();
  if (seconds > 0 && minutes <= 0 && hours <= 0 && days <= 0) {
    str += seconds + " second";
  } else if (seconds > 1) {
    str += seconds + " seconds";
  } else if (seconds > 0) {
    str += seconds + " second";
  }
  return str;
}
