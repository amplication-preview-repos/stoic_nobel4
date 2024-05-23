import { Module } from "@nestjs/common";
import { TaskCategoryModuleBase } from "./base/taskCategory.module.base";
import { TaskCategoryService } from "./taskCategory.service";
import { TaskCategoryController } from "./taskCategory.controller";
import { TaskCategoryResolver } from "./taskCategory.resolver";

@Module({
  imports: [TaskCategoryModuleBase],
  controllers: [TaskCategoryController],
  providers: [TaskCategoryService, TaskCategoryResolver],
  exports: [TaskCategoryService],
})
export class TaskCategoryModule {}
