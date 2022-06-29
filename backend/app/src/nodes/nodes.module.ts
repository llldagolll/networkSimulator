import { Module } from '@nestjs/common';
import { NodesResolver } from './nodes.resolver';
import { NodesService } from './nodes.service';

@Module({
  providers: [NodesResolver, NodesService]
})
export class NodesModule { }
