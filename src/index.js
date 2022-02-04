module.exports = function toReadable (number) {
let once =['','one','two','three','four','five','six','seven','eight','nine'];
let teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
let tens =['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

res = '';

let str = String(number);
let first = +(str[0]);
let second = +(str[1]);
let third = +(str[2]);

if (number == 0) {
  result = 'zero';
} else if (number < 10) {
  result = once[number];
} else if (number > 9 && number < 20) {
  result = teens[number - 10];
} else if (number >= 20 && number < 100 && second == 0) {
  result = tens[first];
} else if (number > 20 && number < 100 && second != 0) {
  result = tens[first] + ' ' + once[second];
} else if (number > 99 && second == 0 && third == 0) {
  result = once[first] + ' hundred';
} else if (number > 99 && second == 0 && third != 0) {
  result = once[first] + ' hundred ' + once[third];
}  else if (number > 109 && second == 1) {
    result = once[first] + ' hundred ' + teens[third];
} else if (number > 109 && second != 0 && third == 0) {
  result = once[first] + ' hundred ' + tens[second];
} else if (number > 109 && second > 1 && third != 0) {
  result = once[first] + ' hundred ' + tens[second] + ' ' + once[third];
} 

return result;

}