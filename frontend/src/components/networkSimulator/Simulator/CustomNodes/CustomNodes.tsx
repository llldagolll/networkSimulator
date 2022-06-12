import { useRef } from "react";
import { Handle, Position } from "react-flow-renderer";
import { GatewayModalForm, WebModalForm, ClientModalForm, LanModalForm } from "./Modal/ModalForm";
import useGenerateFormValue from "../hooks/useGenerateFormValue";
import TemplateNode from "./atom/TemplateNode";
import { useForm } from "react-hook-form";



export const ClientNode = ({ data }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (dt) => {
    const formValue = useGenerateFormValue({
      id: data.id,
      type: data.type,
      requestPort: dt[`${data.type}${data.id}requestPort`],
      responsePort: dt[`${data.type}${data.id}responsePort`],
    })

    sessionStorage.setItem(`${data.id}`, JSON.stringify(formValue))
    return
  }



  return (
    <TemplateNode
      type={data.type}
      nodeId={data.id}
      content={
        <ClientModalForm
          nodeId={data.id}
          type={data.type}
          onSubmit={handleSubmit(onSubmit)}
          register={register}
        />
      }
    >
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">{data.label}</label>
      </div>
    </TemplateNode>
  );
}


export const WebNode = ({ data }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (dt) => {
    const formValue = useGenerateFormValue({
      id: data.id,
      type: data.type,
      requestPort: dt[`${data.type}${data.id}requestPort`],
      responsePort: dt[`${data.type}${data.id}responsePort`],
    })

    sessionStorage.setItem(`${data.id}`, JSON.stringify(formValue))
    return
  }


  return (
    <TemplateNode
      nodeId={data.id}
      type={data.type}
      content={
        <WebModalForm
          nodeId={data.id}
          type={data.type}
          onSubmit={handleSubmit(onSubmit)}
          register={register}
        />
      }
    >
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">{data.label}</label>
      </div>
      <Handle type="source" position={Position.Bottom} />

    </TemplateNode>
  );
}

export const GatewayNode = ({ data }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (dt) => {
    const formValue = useGenerateFormValue({
      id: data.id,
      type: data.type,
      inboundPort: dt[`${data.type}${data.id}inboundPort`],
      outboundPort: dt[`${data.type}${data.id}outboundPort`],
    })

    sessionStorage.setItem(`${data.id}`, JSON.stringify(formValue))
    return
  }

  return (
    <TemplateNode
      nodeId={data.id}
      type={data.type}
      content={
        <GatewayModalForm
          nodeId={data.id}
          type={data.type}
          onSubmit={handleSubmit(onSubmit)}
          register={register}
        />
      }
    >
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">{data.label}</label>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </TemplateNode>
  );
}


export const LanNode = ({ data }) => {

  const { register, handleSubmit } = useForm();
  const onSubmit = (dt) => {
    const formValue = useGenerateFormValue({
      id: data.id,
      type: data.type,
      inboundPort: dt[`${data.type}${data.id}inboundPort`],
      outboundPort: dt[`${data.type}${data.id}outboundPort`],
    })

    sessionStorage.setItem(`${data.id}`, JSON.stringify(formValue))
    return
  }


  return (
    <TemplateNode
      nodeId={data.id}
      type={data.type}
      content={
        <LanModalForm
          nodeId={data.id}
          type={data.type}
          onSubmit={handleSubmit(onSubmit)}
          register={register}
        />
      }
    >
      <label htmlFor="text">{data.label}</label>
      <Handle type="source" position={Position.Bottom} />
    </TemplateNode>
  );
}

