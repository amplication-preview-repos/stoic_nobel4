import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TaskWhereInput = {
  assignee?: StringNullableFilter;
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  priority?: "Option1";
  status?: "Option1";
  title?: StringNullableFilter;
};
