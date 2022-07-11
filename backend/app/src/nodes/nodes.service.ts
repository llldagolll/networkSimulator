import { Injectable } from '@nestjs/common';
import { CreateNodeInput } from './dto/input/create-node.input';
import { Node } from './model/node';
import { v4 as uuidv4 } from 'uuid';
import { UpdateNodeInput } from './dto/input/update-node.input';
import { GetNodeArgs } from './dto/args/get-node.args';
import { GetNodesArgs } from './dto/args/get-nodes.args';
import { DeleteNodeInput } from './dto/input/delete-node.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class NodesService {
  constructor(
    @InjectModel(Node.name)
    private readonly nodeModel: Model<Node>
  ) { }

  public createNode(createNodeData: CreateNodeInput) {
    try {
      const node = new this.nodeModel({
        userId: uuidv4(),
        ...createNodeData
      })
      return node.save();
    } catch (error) {
      return new Error(error.message)
    }
  }


  public async updateNode(updateNodeData: UpdateNodeInput) {
    try {
      const node = this.nodeModel.findOneAndUpdate({ userId: updateNodeData.userId }, { $set: updateNodeData }, { new: true }).exec();
      if (!node) return "Node not found"
      return node;
    } catch (error) {
      return new Error(error.message)
    }
  }

  public async getNode(getNodeArgs: GetNodeArgs) {
    try {
      const node = await this.nodeModel.findOne({ userId: getNodeArgs.userId }).exec();
      if (!node) return "Node not found"
      return node;
    } catch (error) {
      return new Error(error.message)
    }
  }

  public async getNodes() {
    const node = await this.nodeModel.find();
    if (!node) return "Node not found"
    return node;
  }

  public async deleteNode(deleteNodeData: DeleteNodeInput) {
    try {
      const node = await this.nodeModel.findOneAndRemove({ userId: deleteNodeData.userId })
      if (!node) return "Node not found"
      return node;
    } catch (error) {
      return new Error(error.message)
    }
    // const nodeIndex = this.nodes.findIndex(node => node.userId === deleteNodeData.userId);
    // const node = this.nodes[nodeIndex];
    // this.nodes.splice(nodeIndex)

    // return node;
  }

}
