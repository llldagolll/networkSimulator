import React from "react";

const InputWebServerNode = () => {
    const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: any) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move'
    }
    return (
        <>
            {/*@ts-ignore*/}
            <div className="dndnode input"  onDragStart={(event: React.DragEvent<HTMLDivElement>) => onDragStart(event,'input')} draggable>
                Web Server
            </div>
        </>
    )
}

export  default InputWebServerNode