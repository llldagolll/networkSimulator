import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { NodesModule } from './nodes/nodes.module';
import { MyLoggerModule } from './my-logger/my-logger.module';
import { NodesResolver } from './nodes/nodes.resolver';
import { PetsModule } from './pets/pets.module';

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
    RecipesModule,
    MyLoggerModule,
    NodesModule,
    PetsModule,
  ],
  providers: [
    AppService,
  ],
  controllers: [
    AppController,
  ],
})
export class AppModule { }
