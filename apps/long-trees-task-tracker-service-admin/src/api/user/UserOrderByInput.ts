import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
