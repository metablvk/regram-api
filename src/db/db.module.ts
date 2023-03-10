import { Module } from '@nestjs/common';
import { PG_CONNECTION } from 'src/constants';
import { Pool } from 'pg';

const dbProvider = {
  provide: PG_CONNECTION,
  useValue: new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'regram',
    password: 'password',
    port: 5432,
  }),
};
@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DbModule {}
