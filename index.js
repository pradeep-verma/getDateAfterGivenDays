var addDays = require("date-fns/addDays");
var format = require("date-fns/format");

let dateAfterGivenDays = (days) => {
  let modifiedDate = addDays(new Date(2020, 7, 22), days);
  let finalDate = format(modifiedDate, "dd-MM-yyyy");
  return finalDate;
};
module.exports = dateAfterGivenDays;
console.log(dateAfterGivenDays(5));
