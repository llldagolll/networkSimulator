import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { NodesModule } from './nodes/nodes.module';
import { MyLoggerModule } from './my-logger/my-logger.module';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,
      autoSchemaFile: (process.cwd(), 'src/schema.gql'),
      cors: {
        origin: 'http://localhost:3000',
        Credentials: true,
      }
    }),
    MongooseModule.forRoot('mongodb://nobuya:nbadmin@networksimulator-mongo-1:27017/test'),
    MyLoggerModule,
    NodesModule,
    CatsModule,
    BlogModule,
  ],
  providers: [
    AppService,
  ],
  controllers: [
    AppController,
  ],
})
export class AppModule { }
