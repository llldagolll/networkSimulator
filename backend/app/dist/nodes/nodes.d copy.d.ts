export interface XYPosition {
    x: number;
    y: number;
}
export interface CSSProperties {
    any: any;
}
export declare enum Position {
    Left = "left",
    Top = "top",
    Right = "right",
    Bottom = "bottom"
}
export declare type CoordinateExtent = [[number, number], [number, number]];
export interface Dimensions {
    width: number;
    height: number;
}
export interface HandleElement extends XYPosition, Dimensions {
    id?: string | null;
    position: Position;
}
export declare type NodeHandleBounds = {
    source: HandleElement[] | null;
    target: HandleElement[] | null;
};
export declare const internalsSymbol: unique symbol;
