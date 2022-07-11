import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetNodeArgs } from './dto/args/get-node.args';
import { GetNodesArgs } from './dto/args/get-nodes.args';
import { CreateNodeInput } from './dto/input/create-node.input';
import { DeleteNodeInput } from './dto/input/delete-node.input';
import { UpdateNodeInput } from './dto/input/update-node.input';
import { Node } from './model/node'
import { NodesService } from './nodes.service';

@Resolver(() => Node)
export class NodesResolver {
  constructor(private readonly nodesService: NodesService) { }

  @Query(() => Node, { name: 'node', nullable: true })
  getNode(@Args() getNodeArgs: GetNodeArgs): Node {
    return this.nodesService.getNode(getNodeArgs);
  }

  @Query(() => [Node], { name: 'nodes', nullable: 'items' })
  getNodes(@Args() getNodesArgs: GetNodesArgs): Node[] {
    return this.nodesService.getNodes(getNodesArgs);
  }

  @Mutation(() => Node)
  createNode(@Args('createNodeData') createNodeData: CreateNodeInput): Node {
    return this.nodesService.createNode(createNodeData);
  }

  @Mutation(() => Node)
  updateNode(@Args('updateNodeData') updateNodeData: UpdateNodeInput): Node {
    return this.nodesService.updateNode(updateNodeData)
  }

  @Mutation(() => Node)
  deleteNode(@Args('deleteNodeData') deleteNodeData: DeleteNodeInput): Node {
    return this.nodesService.deleteNode(deleteNodeData)
  }

}
