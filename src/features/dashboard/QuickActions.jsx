import { BiPlus } from "react-icons/bi";
import Button from "../../components/Button";

function QuickActions() {
  return (
    <div className="col-span-2 flex items-center justify-end gap-4">
      <Button type="primary" type2="button" title="Click to add new task">
        <span className="flex items-center gap-1">
          <BiPlus className="text-xl font-bold" />
          Add Task
        </span>
      </Button>
      <Button type="secondary" title="Click to add new project">
        <span className="flex items-center gap-1">
          <BiPlus className="text-xl font-bold" />
          Add Project
        </span>
      </Button>
    </div>
  );
}

export default QuickActions;
