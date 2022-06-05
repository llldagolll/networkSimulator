import { RequestPortForm, ResponsePortForm } from './atom/ModalFormParts'
import styles from './ModalForm.module.css'


interface modal {
  show: boolean,
  onClick: (e) => void,
  content: any,
}



export const ClientModalForm = ({ nodeId }) => {
  return (
    <>
      <p>{nodeId}</p>
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

