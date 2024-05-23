export type Task = {
  assignee: string | null;
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  priority?: "Option1" | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
