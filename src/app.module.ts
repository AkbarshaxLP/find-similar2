import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { ProductModule } from './product/product.module';
import { UserService } from './user.service';
import { PrismaService } from './prisma.service';
import { PostService } from './post.service';

@Module({
  imports: [CategoriesModule, ProductModule],
  controllers: [AppController],
  providers: [AppService, UserService, PrismaService, PostService],
})
export class AppModule {}
