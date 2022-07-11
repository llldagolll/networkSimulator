import { Module } from '@nestjs/common';
import { NodesService } from './nodes.service';
import { NodesResolver } from './nodes.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Node, NodeSchema } from './model/node';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Node.name, schema: NodeSchema }
    ])
  ],
  providers: [NodesService, NodesResolver]
})
export class NodesModule { }
