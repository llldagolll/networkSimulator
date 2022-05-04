import React  from "react";

const InputTextUpdaterNode = () => {
    const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: any) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move'
    }
    return (
        <>
            {/*@ts-ignore*/}
            <div className="dndnode"
                 onDragStart={
                (event: React.DragEvent<HTMLDivElement>) => onDragStart(event,'textUpdater')
            }
                 draggable
            >
                TextUpdater Node
            </div>
        </>
    )
}

export  default InputTextUpdaterNode
