import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateNodeInput } from './dto/create-node.input';
import { UpdateNodeInput } from './dto/update-node-input';
import { Node } from './entities/node.entity';
import { NodesService } from './nodes.service';



@Resolver()
export class NodesResolver {
  constructor(private readonly nodesService: NodesService) { }


  @Mutation(() => Node)
  createNode(@Args('createNodeInput') createNodeInput: CreateNodeInput) {
    return this.nodesService.create(createNodeInput)
  }

  @Query(() => [Node], { name: 'node' })
  findAll() {
    return this.nodesService.findAll();
  }

  @Query(() => Node, { name: 'node' })
  findOne(@Args('userId', { type: () => String }) userId: string) {
    return this.nodesService.findOne(userId);
  }

  @Mutation(() => Node)
  update(@Args('updateNodeInput') updateNodeInput: UpdateNodeInput) {
    return this.nodesService.update(updateNodeInput.userId, updateNodeInput);
  }

}
