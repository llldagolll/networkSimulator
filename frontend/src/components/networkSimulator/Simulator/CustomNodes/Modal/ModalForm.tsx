import { RequestPortForm, ResponsePortForm } from './atom/ModalFormParts'
import styles from './ModalForm.module.css'


//TODO: ノードフォームが完成次第これを埋めて、適応する
interface modal {
  show: boolean,
  onClick: (e) => void,
  content: any,
}



export const ClientModalForm = ({ nodeId, onSubmit, requestRef, responseRef }) => {
  return (
    <>
      <p>{nodeId}</p>
      <form action='' onSubmit={onSubmit}>
        <label htmlFor="">Request Port: </label>
        <input ref={requestRef} type="text" name="requestPort" id="" />
        <label htmlFor="">Response Port: </label>
        <input ref={responseRef} type="text" name="responsePort" id="" />
        <button type="submit">保存</button>
      </form>
    </>
  )
}

export const GatewayModalForm = ({ nodeId }) => {
  return (
    <>
      <p>{nodeId}</p>
    </>
  )
}

export const LanModalForm = ({ nodeId }) => {
  return (
    <>
      <p>{nodeId}</p>
    </>
  )
}

export const WebModalForm = ({ nodeId }) => {
  return (
    <>
      <p>{nodeId}</p>
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

