import { Query, Resolver } from '@nestjs/graphql';
import { Node } from './entities/node.entity';
import { NodesService } from './nodes.service';



@Resolver()
export class NodesResolver {
  constructor(private nodesService: NodesService) { }

  @Query(returns => [Node])
  async nodes(): Promise<Node[]> {
    return this.nodesService.findAll()
  }

}
