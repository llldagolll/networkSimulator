import { Injectable } from '@nestjs/common';
import { Node } from './entities/node.entity'
import { nodeState } from './seed';

@Injectable()
export class NodesService {
  async findAll(): Promise<Node[]> {
    return nodeState;
  }
}
