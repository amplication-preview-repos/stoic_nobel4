import { TaskCategory as TTaskCategory } from "../api/taskCategory/TaskCategory";

export const TASKCATEGORY_TITLE_FIELD = "name";

export const TaskCategoryTitle = (record: TTaskCategory): string => {
  return record.name?.toString() || String(record.id);
};
