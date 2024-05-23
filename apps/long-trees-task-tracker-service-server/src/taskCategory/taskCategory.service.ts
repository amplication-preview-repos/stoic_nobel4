import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaskCategoryServiceBase } from "./base/taskCategory.service.base";

@Injectable()
export class TaskCategoryService extends TaskCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
