import { DynamicModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

export class GraphQL {
  public static forRoot(): DynamicModule {
    return GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
      introspection: true,
      context: ({ req, res }) => {
        return { req, res };
      },
    });
  }
}
