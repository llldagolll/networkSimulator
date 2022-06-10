import { useRef, useState } from "react";
import { Handle, Position } from "react-flow-renderer";
import { TemplateModal, GatewayModalForm, WebModalForm, ClientModalForm, LanModalForm } from "./Modal/ModalForm";
import styles from './CustomNodes.module.css'
import useGenerateFormValue from "../hooks/useGenerateFormValue";
import TemplateNode from "./atom/TemplateNode";



export const ClientNode = ({ data }) => {
  const requestRef = useRef(null)
  const responseRef = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const formValue = useGenerateFormValue({
      id: data.id,
      type: data.type,
      requestPort: requestRef.current.value,
      responsePort: responseRef.current.value
    })

    sessionStorage.setItem(`${data.id}`, JSON.stringify(formValue))
    return
  }

  return (
    <TemplateNode
      type={data.type}
      content={
        <ClientModalForm
          nodeId={data.id}
          onSubmit={onSubmit}
          requestRef={requestRef}
          responseRef={responseRef}
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
  const requestRef = useRef(null)
  const responseRef = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const formValue = useGenerateFormValue({
      id: data.id,
      type: data.type,
      requestPort: requestRef.current.value,
      responsePort: responseRef.current.value
    })

    sessionStorage.setItem(`${data.id}`, JSON.stringify(formValue))
    return
  }

  return (
    <TemplateNode
      type={data.type}
      content={
        <WebModalForm
          nodeId={data.id}
          onSubmit={onSubmit}
          requestRef={requestRef}
          responseRef={responseRef}
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

  const inboundRef = useRef(null)
  const outboundRef = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const formValue = useGenerateFormValue({
      id: data.id,
      type: data.type,
      inboundPort: inboundRef.current.value,
      outboundPort: outboundRef.current.value,
    })

    sessionStorage.setItem(`${data.id}`, JSON.stringify(formValue))
    return
  }


  return (
    <TemplateNode
      type={data.type}
      content={
        <GatewayModalForm
          nodeId={data.id}
          onSubmit={onSubmit}
          inboundRef={inboundRef}
          outboundRef={outboundRef}
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

  const inboundRef = useRef(null)
  const outboundRef = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const formValue = useGenerateFormValue({
      id: data.id,
      type: data.type,
      inboundPort: inboundRef.current.value,
      outboundPort: outboundRef.current.value,
    })

    sessionStorage.setItem(`${data.id}`, JSON.stringify(formValue))
    return
  }


  return (
    <TemplateNode
      type={data.type}
      content={
        <LanModalForm
          nodeId={data.id}
          onSubmit={onSubmit}
          inboundRef={inboundRef}
          outboundRef={outboundRef}
        />
      }
    >
      <label htmlFor="text">{data.label}</label>
      <Handle type="source" position={Position.Bottom} />
    </TemplateNode>
  );
}

