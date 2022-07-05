import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NodesResolver } from './nodes.resolver';
import { Node, NodeSchema } from './entities/node.entity';
import { NodesService } from './nodes.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Node.name, schema: NodeSchema }
    ])
  ],
  providers: [NodesResolver, NodesService]
})
export class NodesModule { }
