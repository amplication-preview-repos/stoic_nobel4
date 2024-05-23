export type TaskCreateInput = {
  assignee?: string | null;
  description?: string | null;
  dueDate?: Date | null;
  priority?: "Option1" | null;
  status?: "Option1" | null;
  title?: string | null;
};
