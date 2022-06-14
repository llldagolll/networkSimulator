import { useState } from 'react'
import { InboundForm, OutboundForm, RequestPortForm, ResponsePortForm } from './atom/ModalFormParts'
import styles from './ModalForm.module.css'


//TODO: ノードフォームが完成次第これを埋めて、適応する
interface modal {
  show: boolean,
  onClick: (e) => void,
  content: any,
}



export const ClientModalForm = ({ type, nodeId, onSubmit, register }) => {

  return (
    <>
      <p>{nodeId}</p>
      <form action='' onSubmit={onSubmit}>
        <RequestPortForm type={type} nodeId={nodeId} register={register} />
        <ResponsePortForm type={type} nodeId={nodeId} register={register} />
        <button type="submit" hidden />
      </form>
    </>
  )
}

export const GatewayModalForm = ({ nodeId, type, onSubmit, register }) => {
  return (
    <>
      <p>{nodeId}</p>
      <form action='' onSubmit={onSubmit}>
        <InboundForm type={type} nodeId={nodeId} register={register} />
        <OutboundForm type={type} nodeId={nodeId} register={register} />
        <button type="submit" hidden />
      </form>
    </>
  )
}

export const LanModalForm = ({ type, register, nodeId, onSubmit }) => {
  return (
    <>
      <p>{nodeId}</p>
      <form action='' onSubmit={onSubmit}>
        <InboundForm type={type} nodeId={nodeId} register={register} />
        <OutboundForm type={type} nodeId={nodeId} register={register} />
        <button type="submit" hidden />
      </form>
    </>
  )
}

export const WebModalForm = ({ type, nodeId, onSubmit, register }) => {
  return (
    <>
      <p>{nodeId}</p>
      <form action='' onSubmit={onSubmit}>
        <RequestPortForm type={type} nodeId={nodeId} register={register} />
        <ResponsePortForm type={type} nodeId={nodeId} register={register} />
        <button type="submit" hidden />
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

