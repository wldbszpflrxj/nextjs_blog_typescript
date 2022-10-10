import { parseISO, format } from "date-fns";

interface IDate {
  dateString: Date;
}

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
