import React from 'react'
import {getBezierPath, getEdgeCenter} from "react-flow-renderer";
import './ButtonEdge.css'

const foreignObjectSize = 40;

const onEdgeClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: any) => {
    evt.stopPropagation()
    alert(`remove ${id}`);
}


type edge = {
    id: any,
    sourceX: any,
    sourceY: any,
    targetX: any,
    targetY: any,
    sourcePosition: any,
    targetPosition: any,
    style: any,
    markerEnd: any,
}

const CustomEdge = ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style={},
    markerEnd,
}:edge) => {
    const edgePath = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });
    const [edgeCenterX, edgeCenterY] = getEdgeCenter({
        sourceX,
        sourceY,
        targetX,
        targetY,
    })

    return (
        <>
            <path
                id={id}
                style={style}
                className="react-flow__edge-path"
                d={edgePath}
                markerEnd={markerEnd}
            />
            <foreignObject
                width={foreignObjectSize}
                height={foreignObjectSize}
                x={edgeCenterX-foreignObjectSize/2}
                y={edgeCenterY-foreignObjectSize/2}
                className="edgebutton-foreignobject"
                requiredExtensions="http://www.w3.org/1999/xhtml"
                >
                <body>
                {/*<button className="edgebutton" onClick={(event => onEdgeClick(event,id))}>*/}
                {/*    x*/}
                {/*</button>*/}
                <button className="edgebutton" onClick={(event => onEdgeClick(event,id))}>
                    x
                </button>
                </body>
            </foreignObject>
        </>
    )
}

export  default CustomEdge