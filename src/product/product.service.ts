import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';
import { FilterProductDto } from './dto/filter-product.dto';

interface filterRes {
  count: number;
  label: string;
}

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(data: CreateProductDto): Promise<CreateProductDto> {
    return this.prisma.product.create({
      data,
    });
  }

  async findAll() {
    return {
      count: await this.prisma.product.count(),
      results: await this.prisma.product.findMany(),
    };
  }

  async findAllWithFilters(query: FilterProductDto) {
    const { categoryId, search } = query;
    let arr = await this.prisma.product.findMany();
    if (categoryId) {
      arr = arr.filter((resp) => resp.categoryId === Number(categoryId));
    }
    if (search) {
      arr = arr.filter((resp) => resp.name.indexOf(search) > -1);
    }
    return {
      count: arr.length,
      results: arr,
    };
  }

  async findOne(id: number) {
    return await this.prisma.product.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto): string {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
