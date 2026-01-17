import { useState } from "react";
import { BsFire } from "react-icons/bs";

function TodayTasks() {
  // just for test
  const [isCheck, setIsCheck] = useState(true);
  return (
    <div className="p-4 space-y-5 rounded-md col-span-2 md:col-span-1 bg-card  text-text dark:text-text-dark dark:bg-card-dark shadow-md">
      <h3 className="text-lg flex items-center gap-1 sm:text-xl font-medium tracking-tight">
        <BsFire className="text-orange-400 mb-0.5" /> Focus Today
      </h3>
      {/* list of today items */}
      <div className="flex flex-col gap-4">
        {/* items */}
        <TodayItem
          isCheck={false}
          setIsCheck={setIsCheck}
          title="Fix login validation"
          date="Today"
        />
        <TodayItem
          isCheck={false}
          setIsCheck={setIsCheck}
          title="Finish dashboard UI"
          date="Today"
        />
        <TodayItem
          isCheck={isCheck}
          setIsCheck={setIsCheck}
          title="API integration"
          date="Done"
        />
        <TodayItem
          isCheck={false}
          setIsCheck={setIsCheck}
          title="Landing page completed"
          date="Tommorow"
        />
      </div>
    </div>
  );
}
function TodayItem({ isCheck, setIsCheck, title, date }) {
  return (
    <div className="flex flex-row items-center justify-between">
      {/* checkbox */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="task"
          id="task"
          checked={isCheck}
          className="accent-primary cursor-pointer hover:accent-green-400"
          onChange={() => setIsCheck((item) => !item)}
        />
        <label
          htmlFor="task"
          className="select-none cursor-pointer flex items-center relative"
        >
          <div
            className={`absolute transition-all duration-300 ${isCheck ? "w-full" : "w-0"} bg-linear-to-r from-primary via-green-secondary to-primary opacity-80 h-0.5`}
          ></div>
          {title}
        </label>
      </div>
      <div className="text-xs flex items-center gap-1">
        <span>{date}</span>
        <span
          className={`h-2 w-2 rounded-full ${isCheck ? "bg-primary" : "bg-yellow-500 animate-pulse"}`}
        ></span>
      </div>
    </div>
  );
}

export default TodayTasks;
