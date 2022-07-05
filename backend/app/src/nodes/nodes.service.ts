import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNodeInput } from './dto/create-node.input';
import { UpdateNodeInput } from './dto/update-node-input';
import { Node } from './entities/node.entity'


@Injectable()
export class NodesService {
  constructor(
    @InjectModel(Node.name)
    private readonly nodeModel: Model<Node>,
  ) { }

  create(createNodeInput: CreateNodeInput) {
    try {
      const node = new this.nodeModel(createNodeInput);
      return node.save();
    } catch (error) {
      return new Error(error.message)
    }
  }

  async findAll() {
    try {
      const node = await this.nodeModel.find();
      if (!node) return 'Node not found'
      return node;
    } catch (error) {
      return new Error(error.message)
    }
  }

  async findOne(userId: string) {
    try {
      const node = await this.nodeModel.findOne({ userId: userId }).exec();
      if (!node) return 'Node not found'
    } catch (error) {
      return new Error(error.message)
    }
  }

  update(id: string, updateNodeInput: UpdateNodeInput) {
    return `This action updates a #${id}`;
  }

}
