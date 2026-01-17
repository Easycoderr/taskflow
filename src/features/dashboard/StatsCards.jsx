import { IoTodaySharp } from "react-icons/io5";
import StatsCardItem from "./StatsCardItem";
import { MdDoneAll, MdPendingActions } from "react-icons/md";

import { LuAlarmClockOff } from "react-icons/lu";

function StatsCards() {
  return (
    <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {/* card 1 */}
      <StatsCardItem record="5" title="Today">
        <IoTodaySharp />
      </StatsCardItem>
      {/* card 2 */}
      <StatsCardItem record="10" title="Completed">
        <MdDoneAll />
      </StatsCardItem>
      {/* card 3 */}
      <StatsCardItem record="20" title="incompleted">
        <MdPendingActions />
      </StatsCardItem>
      {/* card 3 */}
      <StatsCardItem record="3" title="Overdue">
        <LuAlarmClockOff />
      </StatsCardItem>
    </div>
  );
}

export default StatsCards;
