import { Injectable, Inject } from '@nestjs/common';
import { IPost } from './interfaces/post.interface';
import { PG_CONNECTION } from 'src/constants';

@Injectable()
export class PostsService {
  constructor(@Inject(PG_CONNECTION) private conn: any) {}
  async create(post: IPost) {
    /* 
      Create a post using title, description, img, and uid which are sent as 
      an argument through the create method.
    */
    const { title, description, img, uid } = post;

    const res = await this.conn.query(
      'INSERT INTO Post (title, description, img, uid) VALUES ($1, $2, $3, $4)',
      [title, description, img, uid],
    );
    return res.rows;
  }
  async findAll() {
    /*
      Find all posts inside the database under post, and return them back.
    */
    const res = await this.conn.query('SELECT * FROM post');
    return res.rows;
  }
  async updateOne(id, post: IPost) {
    /*
      Update one post matching the id in database
    */
    const { title, description, img } = post;

    const res = await this.conn.query(
      `
      UPDATE Post
        SET title = $1,
        description = $2,
        img = $3
        WHERE id = '${id}'
     `,
      [title, description, img],
    );
    return res;
  }

  async deleteOne(id) {
    /*
      Delete one post matching the id in database
    */
    const res = await this.conn.query(`DELETE FROM Post where id=${id}`);
    return res;
  }
  async findOne(id) {
    /*
      Find one post matching the id in the database.
    */
    const res = await this.conn.query(`select * from post where id=${id}`);
    return res.rows;
  }
}
