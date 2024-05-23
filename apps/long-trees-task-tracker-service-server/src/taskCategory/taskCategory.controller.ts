import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TaskCategoryService } from "./taskCategory.service";
import { TaskCategoryControllerBase } from "./base/taskCategory.controller.base";

@swagger.ApiTags("taskCategories")
@common.Controller("taskCategories")
export class TaskCategoryController extends TaskCategoryControllerBase {
  constructor(protected readonly service: TaskCategoryService) {
    super(service);
  }
}
