import { Handle, Position } from "react-flow-renderer";
import TemplateNode from "./templates/TemplateNode";
import { useForm } from "react-hook-form";
import useStore from "../../store";
import { useEffect } from "react";



export const ClientNode = ({ data }) => {
  const { setFocusNode, setToggleForm } = useStore()

  return (
    <TemplateNode
      data={data}
    >
      <Handle type="target" position={Position.Top} />
      <div>
        <label onDoubleClick={(e) => setFocusNode(e, setToggleForm)} htmlFor="text">{data.label}</label>
      </div>
    </TemplateNode>
  );
}


export const WebNode = ({ data }) => {
  const { setFocusNode, setToggleForm } = useStore()


  return (
    <TemplateNode
      data={data}
    >
      <Handle type="target" position={Position.Top} />
      <div>
        <label onDoubleClick={(e) => setFocusNode(e, setToggleForm)} htmlFor="text">{data.label}</label>
      </div>
      <Handle type="source" position={Position.Bottom} />

    </TemplateNode>
  );
}

export const GatewayNode = ({ data }) => {
  const { setFocusNode, setToggleForm } = useStore()

  return (
    <TemplateNode
      data={data}
    >
      <Handle type="target" position={Position.Top} />
      <div>
        <label onDoubleClick={(e) => setFocusNode(e, setToggleForm)} htmlFor="text">{data.label}</label>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </TemplateNode>
  );
}


export const LanNode = ({ data }) => {
  const { setFocusNode, setToggleForm } = useStore()

  return (
    <TemplateNode
      data={data}
    >
      <label onDoubleClick={(e) => setFocusNode(e, setToggleForm)} htmlFor="text">{data.label}</label>
      <Handle type="source" position={Position.Bottom} />
    </TemplateNode>
  );
}

