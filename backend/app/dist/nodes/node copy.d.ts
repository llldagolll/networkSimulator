import { CoordinateExtent, CSSProperties, internalsSymbol, NodeHandleBounds, Position, XYPosition } from './type';
export declare class Node {
    id: string;
    position: XYPosition;
    data: {
        id: string;
        type: string;
        label: string;
    };
    requestPort?: string;
    responsePort?: string;
    inboundPort?: string;
    outboundPort?: string;
    type: string;
    style?: CSSProperties;
    className?: string;
    targetPosition?: Position;
    sourcePosition?: Position;
    hidden?: boolean;
    selected?: boolean;
    dragging?: boolean;
    draggable?: boolean;
    selectable?: boolean;
    connectable?: boolean;
    dragHandle?: string;
    width?: number | null;
    height?: number | null;
    parentNode?: string;
    zIndex?: number;
    extent?: 'parent' | CoordinateExtent;
    expandParent?: boolean;
    positionAbsolute?: XYPosition;
    [internalsSymbol]?: {
        z?: number;
        handleBounds?: NodeHandleBounds;
        isParent?: boolean;
    };
}
