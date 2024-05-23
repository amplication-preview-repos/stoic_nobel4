import { TaskCategoryWhereInput } from "./TaskCategoryWhereInput";
import { TaskCategoryOrderByInput } from "./TaskCategoryOrderByInput";

export type TaskCategoryFindManyArgs = {
  where?: TaskCategoryWhereInput;
  orderBy?: Array<TaskCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
