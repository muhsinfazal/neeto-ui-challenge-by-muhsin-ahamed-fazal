import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const formatCreationDate = date => ({
  fullDate: dayjs(date).format("dddd, h:mmA"),
  relativeDate: dayjs(date).fromNow(),
});
