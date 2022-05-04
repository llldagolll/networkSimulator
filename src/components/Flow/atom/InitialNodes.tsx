import {Node} from "react-flow-renderer";
import TextUpdaterNode from "./DnDFlow/CustomNodes/TextUpdaterNode";
import ParentUpdaterNode from "./DnDFlow/CustomNodes/ParentUpdaterNode";

export const initialNodes: Node[] = [
    {
        id: '1',
        type: 'input',
        data: {label: 'input node'},
        position: {x: 250, y: 5},
    },
    {
        id: '2',
        type: 'group',
        data: {label: 'lan node'},
        position: {x: 250, y: 15},
        style: {
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            width: 200,
            height: 200
        },
    },
    {
        id: '3',
        type: 'input',
        data: {label: 'input node in lan'},
        position: {x: 50, y: 20},
        parentNode: '2',
        extent:'parent'
    },
]

