import tinydate from 'tinydate';
//var format = tinydate('{YYYY}-{MM}-{DD}');
//var format = tinydate('{DD} {MMMM} {YYYY}');
var format = tinydate('{DD} {MMMM} {YYYY}', {
  MMMM: d => d.toLocaleString('default', { month: 'short' }),
  DD: d => d.getDate()
});
export default (function (date) {
  return date instanceof Date ? format(date) : format(new Date(date));
});