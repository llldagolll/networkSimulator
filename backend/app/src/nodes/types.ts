import { ObjectType, Field, } from "@nestjs/graphql";


@ObjectType()
export class XYPosition {
  @Field()
  x: number;

  @Field()
  y: number;
}

@ObjectType()
export class Data {
  @Field()
  id: string
  @Field()
  type: string
  @Field()
  label: string
}


export enum Position {
  Left = "left",
  Top = "top",
  Right = "right",
  Bottom = "bottom"
}





@ObjectType()
export class Dimensions {
  @Field()
  width: number;

  @Field()
  height: number;
}

// export declare type CoordinateExtent = [[number, number], [number, number]];

// export interface CSSProperties {
//   any
// }


// export interface HandleElement extends XYPosition, Dimensions {
//   id?: string | null;
//   position: Position;
// }

// export declare type NodeHandleBounds = {
//   source: HandleElement[] | null;
//   target: HandleElement[] | null;
// };


// export declare const internalsSymbol: unique symbol;
