import { Field, ID, ObjectType } from "@nestjs/graphql";
import { CoordinateExtent, CSSProperties, internalsSymbol, NodeHandleBounds, Position, XYPosition } from './type'




@ObjectType()
export class Node {
  @Field(type => ID)
  id: string;

  // @Field()
  // position: XYPosition;

  // @Field()
  // data: {
  //   id: string,
  //   type: string,
  //   label: string,
  // }

  // @Field()
  // requestPort: string

  // @Field()
  // responsePort: string

  // @Field()
  // inboundPort: string

  // @Field()
  // outboundPort: string

  @Field()
  type: string

  // @Field()
  // style?: CSSProperties;

  // @Field()
  // className?: string;

  // @Field()
  // targetPosition?: Position;

  // @Field()
  // sourcePosition?: Position;

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
  // width?: number | null;

  // @Field()
  // height?: number | null;

  // @Field()
  // parentNode?: string;

  // @Field()
  // zIndex?: number;

  // @Field()
  // extent?: 'parent' | CoordinateExtent

  // @Field()
  // expandParent?: boolean;

  // @Field()
  // positionAbsolute?: XYPosition;

  // @Field()
  // [internalsSymbol]?: {
  //   z?: number;
  //   handleBounds?: NodeHandleBounds;
  //   isParent?: boolean;
  // }

}

