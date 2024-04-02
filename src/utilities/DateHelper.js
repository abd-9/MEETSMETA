import React from "react";
import moment from "moment";
import XTooltip from "../component/Shared/Tooltip";

const DateHelper = {
  format: (date, format = "DD MMMM yyyy") => {
    return moment(date || null).format(format);
  },
  now: () => {
    return moment().utc();
  },

  utc: (date) => {
    return moment(date).utc();
  },
  utcString: (date) => {
    return moment(date).toISOString();
  },
  onlyDate: (date) => {
    return moment(date).format("YYYY-MM-DD") + "T00:00:00.000Z";
  },
  isBetween: (date, start, end) => {
    return moment(date).isBetween(start, end);
  },
  fromNow: (
    _date,
    format = "yyyy/MM/DD HH:MM:A",
    hoverPlacement = "bottom"
  ) => {
    const date = moment(_date).utc();
    const past = moment.duration(date.diff()).asDays();
    if (past > 1) return moment(date).format(format);
    return (
      <XTooltip arrow title={moment(date).format(format)}>
        <span>{moment(date).fromNow()}</span>
      </XTooltip>
    );
  },
};
export default DateHelper;
