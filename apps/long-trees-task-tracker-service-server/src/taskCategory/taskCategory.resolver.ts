import * as graphql from "@nestjs/graphql";
import { TaskCategoryResolverBase } from "./base/taskCategory.resolver.base";
import { TaskCategory } from "./base/TaskCategory";
import { TaskCategoryService } from "./taskCategory.service";

@graphql.Resolver(() => TaskCategory)
export class TaskCategoryResolver extends TaskCategoryResolverBase {
  constructor(protected readonly service: TaskCategoryService) {
    super(service);
  }
}
