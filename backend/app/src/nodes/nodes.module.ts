import { Module } from '@nestjs/common';
import { NodesService } from './nodes.service';
import { NodesResolver } from './nodes.resolver';

@Module({
  providers: [NodesService, NodesResolver]
})
export class NodesModule {}
