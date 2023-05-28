import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Category, Prisma } from '@prisma/client';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async getAll(page: string) {
    return {
      count: await this.prisma.category.count(),
      results: await this.prisma.category.findMany({
        skip: Number(page) ? (Number(page) - 1) * 10 : 0,
        take: 10,
      }),
    };
  }

  async createCategory(data: Prisma.CategoryCreateInput): Promise<Category> {
    return this.prisma.category.create({
      data,
    });
  }

  async deleteCategory(where: Prisma.PostWhereUniqueInput): Promise<Category> {
    return this.prisma.category.delete({
      where,
    });
  }
}
