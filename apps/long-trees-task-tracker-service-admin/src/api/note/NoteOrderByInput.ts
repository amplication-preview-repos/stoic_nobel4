import { SortOrder } from "../../util/SortOrder";

export type NoteOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
