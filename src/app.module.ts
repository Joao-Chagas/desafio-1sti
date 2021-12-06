import { Module } from '@nestjs/common';
import { ApiModule } from '@api/api.module';
import { GraphQL } from '@graphql/graphql.service';

@Module({
  imports: [GraphQL.forRoot(), ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
