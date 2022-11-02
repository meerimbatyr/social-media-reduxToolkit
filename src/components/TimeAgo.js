import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timeStamp }) => {
  let timeAgo = "";

  if (timeStamp) {
    const date = parseISO(timeStamp);
    console.log(date);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timeStamp} style={{ padding: "10px" }}>
      <i>{timeAgo}</i>
    </span>
  );
};
export default TimeAgo;
