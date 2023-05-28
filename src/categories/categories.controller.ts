import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from '@prisma/client';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getAll(@Query('page') page: string) {
    return this.categoriesService.getAll(page);
  }

  @Get(':id')
  getOne(@Param() id: string) {
    return id;
  }

  @Post()
  create(@Body() postData: { name: string }) {
    return this.categoriesService.createCategory(postData);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<Category> {
    return this.categoriesService.deleteCategory({ id: Number(id) });
  }
}
