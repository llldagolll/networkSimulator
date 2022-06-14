import { useState } from 'react'
import { InboundForm, OutboundForm, RequestPortForm, ResponsePortForm } from './atom/ModalFormParts'
import styles from './ModalForm.module.css'





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





