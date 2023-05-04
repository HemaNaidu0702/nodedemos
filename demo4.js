var validator = require("validator");

console.log(validator.isEmail("hi@email.com"));
console.log(validator.isEmail("hiemail.com"));
console.log(validator.isURL("http://www.google.com"));
console.log(validator.isURL("http://wwwgooglecom"));
