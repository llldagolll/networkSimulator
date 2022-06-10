import { useState } from 'react'
import { InboundForm, OutboundForm, RequestPortForm, ResponsePortForm } from './atom/ModalFormParts'
import styles from './ModalForm.module.css'


//TODO: ノードフォームが完成次第これを埋めて、適応する
interface modal {
  show: boolean,
  onClick: (e) => void,
  content: any,
}

interface modalform {
  nodeId: string,
  onSubmit: (e) => void,
  requestRef?: string,
  responseRef?: string,
  inboundRef?: string,
  outboundRef?: string
}


export const ClientModalForm = ({ nodeId, onSubmit, requestRef, responseRef }) => {

  return (
    <>
      <p>{nodeId}</p>
      <form action='' onSubmit={onSubmit}>
        <RequestPortForm requestRef={requestRef} />
        <ResponsePortForm responseRef={responseRef} />
        <button type="submit" hidden />
      </form>
    </>
  )
}

export const GatewayModalForm = ({ nodeId, onSubmit, inboundRef, outboundRef }) => {
  return (
    <>
      <p>{nodeId}</p>
      <form action='' onSubmit={onSubmit}>
        <InboundForm inboundRef={inboundRef} />
        <OutboundForm outboundRef={outboundRef} />
        <button type="submit">保存</button>
      </form>
    </>
  )
}

export const LanModalForm = ({ nodeId, onSubmit, inboundRef, outboundRef }) => {
  return (
    <>
      <p>{nodeId}</p>
      <form action='' onSubmit={onSubmit}>
        <InboundForm inboundRef={inboundRef} />
        <OutboundForm outboundRef={outboundRef} />
        <button type="submit">保存</button>
      </form>
    </>
  )
}

export const WebModalForm = ({ nodeId, onSubmit, requestRef, responseRef }) => {
  return (
    <>
      <p>{nodeId}</p>
      <form action='' onSubmit={onSubmit}>
        <RequestPortForm requestRef={requestRef} />
        <ResponsePortForm responseRef={responseRef} />
        <button type="submit">保存</button>
      </form>
    </>
  )
}




export const TemplateModal = ({ show, onClick, content }: modal) => {
  if (show) {
    return (
      <div className={styles['modal-content']} >
        <p>{content}</p>
        <br />
        <button className={styles['modal-button']} onClick={onClick}>Close</button>
      </div >
    )
  }
}

