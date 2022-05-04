import {useCallback} from "react";
import {Handle, Position} from "react-flow-renderer";

const handleStyle = { left: 10}

const TextUpdaterNode = ({data}:{data:any}) => {
    const onChange = useCallback((evt: { target: { value: any; }; }) => {
        console.log(evt.target.value);
    },[])
    return (
        <div className="text-updater-node">
            <Handle type="target" position={Position.Top}/>
            <div>
                <label htmlFor="text">Text:</label>
                <input type="text" id="text" name="text" onChange={onChange}/>
            </div>
            <Handle type="source" position={Position.Bottom} id="a" style={handleStyle}/>
        </div>
    )
}

export default TextUpdaterNode