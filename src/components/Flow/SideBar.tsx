import React, {forwardRef } from "react";
import InputEc2Node from "./atom/DnDFlow/InputWebServerNode";
import InputGatewayNode from "./atom/DnDFlow/InputGatewayNode";
import InputClientNode from "./atom/DnDFlow/InputClientNode";

const Sidebar = () => {
    // const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: any) => {
    //     event.dataTransfer.setData('application/reactflow', nodeType);
    //     event.dataTransfer.effectAllowed = 'move'
    // }
    //@ts-ignore

    // @ts-ignore
    return (
        <aside>
            <div className="description">You can drag these nodes to the pane on the right</div>
            <InputGatewayNode />
            <InputEc2Node />
            <InputClientNode/>
        </aside>
    )
}

export default Sidebar