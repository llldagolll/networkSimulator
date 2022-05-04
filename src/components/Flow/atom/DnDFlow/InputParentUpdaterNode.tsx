import React  from "react";

const InputParentUpdaterNode = () => {
    const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: any) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move'
    }
    return (
        <>
            {/*@ts-ignore*/}
            <div className="dndnode"
                 onDragStart={
                (event: React.DragEvent<HTMLDivElement>) => onDragStart(event,'parentUpdater')
            }
                 draggable
            >
                ParentUpdater Node
            </div>
        </>
    )
}

export  default InputParentUpdaterNode
