/** @jsx jsx */
import { format, parseISO } from 'date-fns';
import { sv, enUS } from 'date-fns/locale';

export const Formats = {
  dateFormat: "d MMMM yyyy",
  timeFormat: "'kl.' HH:mm",
  dateAndTimeFormat: "d MMMM yyyy 'kl.' HH:mm",
  simpleDateAndTimeFormat: "yyyy MM dd HH:mm:ss"
}

const isDate = (date) => {
  return (new Date(date) !== "Invalid Date" && !isNaN(new Date(date)))
}

export const DateFormat = ({
  date = null,
  dateFormat = null,
  showDate = false,
  showTime = false,
  locale = 'sv'
}) => {
  const supportedLocales = { sv: sv, enUS: enUS}

  if (isDate(date)) {
    let displayFormat;
    if (dateFormat)
      displayFormat = dateFormat;
    else
      displayFormat = (showDate && showTime) ? Formats.dateAndTimeFormat : showDate ? Formats.dateFormat : showTime ? Formats.timeFormat : Formats.simpleDateAndTimeFormat
    return format(parseISO(date), displayFormat, { locale: supportedLocales[locale] })
  } else {
    console.log("parse date failed")
    return null
  }
}
