import React, {forwardRef } from "react";
import InputEc2Node from "./atom/DnDFlow/InputWebServerNode";
import InputGatewayNode from "./atom/DnDFlow/InputGatewayNode";
import InputClientNode from "./atom/DnDFlow/InputClientNode";
import InputSubnetNode from "./atom/DnDFlow/InputSubnetNode";
import InputParentUpdaterNode from "./atom/DnDFlow/InputParentUpdaterNode";
import InputTextUpdaterNode from "./atom/DnDFlow/InputTextUpdaterNode";

const Sidebar = () => {
    // @ts-ignore
    return (
        <aside>
            <div className="description">You can drag these nodes to the pane on the right</div>
            <InputGatewayNode />
            <InputEc2Node />
            <InputClientNode/>
            <InputSubnetNode/>
            <InputTextUpdaterNode/>
            <InputParentUpdaterNode/>
        </aside>
    )
}

export default Sidebar