import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type NoteWhereInput = {
  content?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
