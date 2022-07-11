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
  getNode(@Args() getNodeArgs: GetNodeArgs) {
    return this.nodesService.getNode(getNodeArgs);
  }

  @Query(() => [Node], { name: 'nodes', nullable: 'items' })
  getNodes() {
    return this.nodesService.getNodes();
  }

  @Mutation(() => Node)
  createNode(@Args('createNodeData') createNodeData: CreateNodeInput) {
    return this.nodesService.createNode(createNodeData);
  }

  @Mutation(() => Node)
  updateNode(@Args('updateNodeData') updateNodeData: UpdateNodeInput) {
    return this.nodesService.updateNode(updateNodeData)
  }

  @Mutation(() => Node)
  deleteNode(@Args('deleteNodeData') deleteNodeData: DeleteNodeInput) {
    return this.nodesService.deleteNode(deleteNodeData)
  }

}
