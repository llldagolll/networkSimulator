import { Field, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Position, XYPosition, Data } from "./types";


registerEnumType(Position, {
  name: 'Position'
})

@ObjectType()
export class Node {
  @Field(() => String, { description: 'user id' })
  userId: string;

  @Prop()
  @Field(() => String, { description: 'user name' })
  username: string;


  @Prop()
  @Field(() => String, { description: 'node id' })
  id: string;


  @Prop()
  @Field(() => String, { description: 'position' })
  position: XYPosition;


  @Prop()
  @Field(() => String, { description: 'label' })
  data: Data;


  @Prop()
  @Field(() => String, { description: 'node type' })
  type: string

  @Prop()
  @Field(() => String, { description: 'request port' })
  requestPort?: string


  @Prop()
  @Field(() => String, { description: 'response port' })
  responsePort?: string


  @Prop()
  @Field(() => String, { description: 'inbound port' })
  inboundPort?: string


  @Prop()
  @Field(() => String, { description: 'outbound port' })
  outboundPort?: string


  @Prop()
  @Field(() => String, { description: 'parentNode ' })
  parentNode?: string;


  @Prop()
  @Field(() => String, { description: 'expand parent' })
  expandParent?: boolean;


  @Prop()
  @Field(() => String, { description: 'target position' })
  targetPosition?: Position;


  @Prop()
  @Field(() => String, { description: 'source position' })
  sourcePosition?: Position;

  // 
  // width?: number | null;

  // 
  // height?: number | null;

  // 
  // positionAbsolute?: XYPosition;

  // 
  // zIndex?: number;

  // 
  // extent?: 'parent' | CoordinateExtent



  // 
  // style?: CSSProperties;

  // 
  // className?: string;



  // 
  // hidden?: boolean;

  // 
  // selected?: boolean;

  // 
  // dragging?: boolean;

  // 
  // draggable?: boolean;

  // 
  // selectable?: boolean;

  // 
  // connectable?: boolean;

  // 
  // dragHandle?: string;



  // 
  // [internalsSymbol]?: {
  //   z?: number;
  //   handleBounds?: NodeHandleBounds;
  //   isParent?: boolean;
  // }

}

export type NodeDocument = Node & Document;

export const NodeSchema = SchemaFactory.createForClass(Node);
