import React, {FormEventHandler, useCallback, useRef} from "react";
import {Handle, Position} from "react-flow-renderer";

const handleStyle = { left: 10}

const TextUpdaterNode = ({data}:{data:any}) => {
    const onChange = useCallback((evt: { target: { value: any; }; }) => {
        console.log(evt.target.value);
    },[])

    const el: any= useRef(null);

    const handleSubmit = (e: any) => {
        e.preventDefault()
        alert(`el: ${el.current.value}`)
        localStorage.setItem('el', 'el.current.value');
    }



    return (
        <div className="text-updater-node">
            <Handle type="target" position={Position.Top}/>
            <div>
                <label htmlFor="text">Text:</label>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            id="text"
                            ref={el}
                            name="text"
                            onChange={onChange}
                        />
                    </label>
                    <input type="submit" value="submit"/>

                </form>
            </div>
            <Handle type="source" position={Position.Bottom} id="a" style={handleStyle}/>
        </div>
    )
}

export default TextUpdaterNode