import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";
import {
  Data,
  Position,
  XYPosition,
} from './types'


registerEnumType(Position, {
  name: 'Position'
})

@ObjectType()
export class Node {
  @Field(type => ID)
  id: string;

  @Field()
  position: XYPosition;

  @Field()
  data: Data;

  @Field()
  type: string

  @Field()
  requestPort?: string

  @Field()
  responsePort?: string

  @Field()
  inboundPort?: string

  @Field()
  outboundPort?: string


  @Field()
  parentNode?: string;


  @Field()
  expandParent?: boolean;

  @Field()
  targetPosition?: Position;

  @Field()
  sourcePosition?: Position;

  // @Field()
  // width?: number | null;

  // @Field()
  // height?: number | null;

  // @Field()
  // positionAbsolute?: XYPosition;

  // @Field()
  // zIndex?: number;

  // @Field()
  // extent?: 'parent' | CoordinateExtent



  // @Field()
  // style?: CSSProperties;

  // @Field()
  // className?: string;



  // @Field()
  // hidden?: boolean;

  // @Field()
  // selected?: boolean;

  // @Field()
  // dragging?: boolean;

  // @Field()
  // draggable?: boolean;

  // @Field()
  // selectable?: boolean;

  // @Field()
  // connectable?: boolean;

  // @Field()
  // dragHandle?: string;



  // @Field()
  // [internalsSymbol]?: {
  //   z?: number;
  //   handleBounds?: NodeHandleBounds;
  //   isParent?: boolean;
  // }

}

