import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreatePostDto, UpdatePostDto, ListAllEntries } from './dto/post.dto';
import { PostsService } from './posts.services';
import { IPost } from './interfaces/post.interface';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }
  @Get()
  async findAll(): Promise<IPost[]> {
    return this.postsService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.postsService.deleteOne(id);
  }
  // @Put(':id')
  // update(@Param('id') id: string) {
  //   return `This action updates a #${id} post`;
  // }
}
