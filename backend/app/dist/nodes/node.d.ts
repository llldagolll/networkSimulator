import { XYPosition } from './type';
export declare class Node {
    id: string;
    position: XYPosition;
    data: {
        id: string;
        type: string;
        label: string;
    };
    type: string;
}
