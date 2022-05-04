import React, {FormEventHandler, useCallback, useRef} from "react";
import {Handle, Position} from "react-flow-renderer";

const handleStyle = { left: 10}

const ParentUpdaterNode = () => {

    const handleSubmit = (e: any) => {
        e.preventDefault()
        alert('Hello')
    }


    return (
        <div
            className="text-updater-node"
        >
            <Handle type="target" position={Position.Top}/>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="submit" value="Parent"/>
                </form>
            </div>
            <Handle type="source" position={Position.Bottom} id="b" style={handleStyle}/>
        </div>
    )
}

export default ParentUpdaterNode
