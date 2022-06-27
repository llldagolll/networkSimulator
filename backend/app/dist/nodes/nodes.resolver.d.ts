import { Node } from './node';
export declare const nodeState: {
    id: string;
    type: string;
    position: {
        x: number;
        y: number;
    };
    data: {
        id: string;
        type: string;
        label: string;
    };
}[];
export declare class NodesResolver {
    nodes(): Promise<Node[]>;
}
