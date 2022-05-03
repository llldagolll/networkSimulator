import React  from "react";

const InputGatewayNode = () => {
    const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: any) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move'
    }
    return (
        <>
            {/*@ts-ignore*/}
            <div className="dndnode"  onDragStart={(event: React.DragEvent<HTMLDivElement>) => onDragStart(event,'default')} draggable>
                Gateway Node
            </div>
        </>
    )
}

export  default InputGatewayNode