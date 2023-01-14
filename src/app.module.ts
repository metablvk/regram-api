import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { DbModule } from './db/db.module';
@Module({
  imports: [PostsModule, DbModule],
})
export class AppModule {}
