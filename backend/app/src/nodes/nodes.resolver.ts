import { Query, Resolver } from '@nestjs/graphql';
import { Node } from './node';
import { nodeState } from './seed';



@Resolver()
export class NodesResolver {
  @Query(returns => [Node])
  async nodes(): Promise<Node[]> {
    return nodeState
  }
}
