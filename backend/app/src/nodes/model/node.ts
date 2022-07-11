import { Field, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Position, XYPosition, Data } from "./type";

registerEnumType(Position, {
  name: 'Position'
})


@ObjectType()
export class Node {
  @Field({ description: 'user id', nullable: true })
  userId: string;

  @Prop()
  @Field({ description: 'user name', nullable: true })
  username: string;


  @Prop()
  @Field(() => String, { description: 'node id', nullable: true })
  id?: string;


  @Prop()
  @Field(() => String, { description: 'position', nullable: true })
  position?: XYPosition;


  @Prop()
  @Field(() => String, { description: 'label', nullable: true })
  data?: Data;


  @Prop()
  @Field(() => String, { description: 'node type', nullable: true })
  type?: string

  @Prop()
  @Field(() => String, { description: 'request port', nullable: true })
  requestPort?: string


  @Prop()
  @Field(() => String, { description: 'response port', nullable: true })
  responsePort?: string


  @Prop()
  @Field(() => String, { description: 'inbound port', nullable: true })
  inboundPort?: string


  @Prop()
  @Field(() => String, { description: 'outbound port', nullable: true })
  outboundPort?: string


  @Prop()
  @Field(() => String, { description: 'parentNode ', nullable: true })
  parentNode?: string;


  @Prop()
  @Field(() => String, { description: 'expand parent', nullable: true })
  expandParent?: boolean;


  @Prop()
  @Field(() => String, { description: 'target position', nullable: true })
  targetPosition?: Position;


  @Prop()
  @Field(() => String, { description: 'source position', nullable: true })
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


export const NodeSchema = SchemaFactory.createForClass(Node);
