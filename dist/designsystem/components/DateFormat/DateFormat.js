'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.DateFormat = exports.Formats = void 0;

var _dateFns = require('date-fns');

var _sv = _interopRequireDefault(require('date-fns/locale/sv'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/** @jsx jsx */
import { jsx } from '@emotion/react';
//const defaultDateFormat = "yyyy MM dd HH:mm:ss";
//const dateAndTimeFormat = "d MMMM yyyy 'kl.' HH:mm";
//const dateFormat = "d MMMM yyyy";
//const timeFormat = "'kl.' HH:mm";
var Formats = {
  dateFormat: 'd MMMM yyyy',
  timeFormat: "'kl.' HH:mm",
  dateAndTimeFormat: "d MMMM yyyy 'kl.' HH:mm",
  simpleDateAndTimeFormat: 'yyyy MM dd HH:mm:ss',
};
exports.Formats = Formats;

var isDate = function isDate(date) {
  return new Date(date) !== 'Invalid Date' && !isNaN(new Date(date));
};

var DateFormat = function DateFormat(_ref) {
  var _ref$date = _ref.date,
    date = _ref$date === void 0 ? null : _ref$date,
    _ref$dateFormat = _ref.dateFormat,
    dateFormat = _ref$dateFormat === void 0 ? null : _ref$dateFormat,
    _ref$showDate = _ref.showDate,
    showDate = _ref$showDate === void 0 ? false : _ref$showDate,
    _ref$showTime = _ref.showTime,
    showTime = _ref$showTime === void 0 ? false : _ref$showTime;

  if (isDate(date)) {
    var displayFormat;
    if (dateFormat) displayFormat = dateFormat;
    else
      displayFormat =
        showDate && showTime
          ? Formats.dateAndTimeFormat
          : showDate
            ? Formats.dateFormat
            : showTime
              ? Formats.timeFormat
              : Formats.simpleDateAndTimeFormat;
    return (0, _dateFns.format)((0, _dateFns.parseISO)(date), displayFormat, {
      locale: _sv['default'],
    });
  } else {
    console.log('parse date failed');
    return null;
  }
};

exports.DateFormat = DateFormat;

//# sourceMappingURL=DateFormat.js.map
