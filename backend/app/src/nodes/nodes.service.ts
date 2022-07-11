import { Injectable } from '@nestjs/common';
import { CreateNodeInput } from './dto/input/create-node.input';
import { Node } from './model/node';
import { v4 as uuidv4 } from 'uuid';
import { UpdateNodeInput } from './dto/input/update-node.input';
import { GetNodeArgs } from './dto/args/get-node.args';
import { GetNodesArgs } from './dto/args/get-nodes.args';
import { DeleteNodeInput } from './dto/input/delete-node.input';

@Injectable()
export class NodesService {
  private nodes: Node[] = [];

  public createNode(createNodeData: CreateNodeInput): Node {
    const node: Node = {
      userId: uuidv4(),
      ...createNodeData
    }
    this.nodes.push(node)

    return node;
  }


  public updateNode(updateNodeData: UpdateNodeInput): Node {
    const node = this.nodes.find(node => node.userId === updateNodeData.userId);
    Object.assign(node, updateNodeData)

    return node;
  }

  public getNode(getNodeArgs: GetNodeArgs): Node {
    return this.nodes.find(node => node.userId === getNodeArgs.userId)
  }

  public getNodes(getNodesArgs: GetNodesArgs): Node[] {
    return getNodesArgs.userIds.map(userId => this.getNode({ userId }));
  }

  public deleteNode(deleteNodeData: DeleteNodeInput): Node {
    const nodeIndex = this.nodes.findIndex(node => node.userId === deleteNodeData.userId);
    const node = this.nodes[nodeIndex];
    this.nodes.splice(nodeIndex)

    return node;
  }

}
