/** @jsx jsx */
import { format, parseISO } from 'date-fns'
import sv from 'date-fns/locale/sv'

//const defaultDateFormat = "yyyy MM dd HH:mm:ss";
//const dateAndTimeFormat = "d MMMM yyyy 'kl.' HH:mm";
//const dateFormat = "d MMMM yyyy";
//const timeFormat = "'kl.' HH:mm";

export const Formats = {

  dateFormat: "d MMMM yyyy",
  timeFormat: "'kl.' HH:mm",
  dateAndTimeFormat: "d MMMM yyyy 'kl.' HH:mm",
  simpleDateAndTimeFormat: "yyyy MM dd HH:mm:ss"

}

const isDate = (date) => {
  return (new Date(date) !== "Invalid Date" && !isNaN(new Date(date)) )
}
  
export const DateFormat = ({date = null, dateFormat = null, showDate = false, showTime = false}) => {

  if(isDate(date)) {
    let displayFormat;
    if(dateFormat)
      displayFormat = dateFormat;
    else
      displayFormat = (showDate && showTime) ? Formats.dateAndTimeFormat : showDate ? Formats.dateFormat : showTime ? Formats.timeFormat : Formats.simpleDateAndTimeFormat
    
    return format(parseISO(date), displayFormat, {locale: sv})
  } else {
    console.log("parse date failed")
    return null
  }
}


