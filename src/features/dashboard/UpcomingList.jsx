import { BiSolidTimer, BiTime, BiTimer } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { TiTime } from "react-icons/ti";

// fake data
const items = ["Project review — Jan 20", "Team meeting — Jan 22"];
function UpcomingList() {
  return (
    <div className="p-4 space-y-4 rounded-md col-span-2 md:col-span-1 bg-card  text-text dark:text-text-dark dark:bg-card-dark shadow-md">
      <h3 className="text-lg flex items-center gap-1 sm:text-xl font-medium tracking-tight">
        <BiSolidTimer size={22} className="text-primary" /> Upcoming
      </h3>
      {/* list of today items */}
      <ul className="divide-y divide-gray-200 dark:divide-gray-700 p-0">
        {items.map((item, index) => (
          <UpcomingItem key={index}>{item}</UpcomingItem>
        ))}
      </ul>
    </div>
  );
}

function UpcomingItem({ children }) {
  return (
    <li className="py-4 hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer flex items-center gap-2">
      <span>
        <GoDotFill />
      </span>
      {children}
    </li>
  );
}

export default UpcomingList;
