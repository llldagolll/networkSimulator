import { RequestPortForm, ResponsePortForm } from './atom/ModalFormParts'
import styles from './ModalForm.module.css'


interface modal {
  show: boolean,
  onClick: (e) => void,
  content: any,
}



export const ClientModalForm = () => {
  return (
    <>
      <p>Client</p>
    </>
  )
}

export const GatewayModalForm = () => {
  return (
    <>
      <p>Gateway</p>
    </>
  )
}

export const LanModalForm = () => {
  return (
    <>
      <p>Lan</p>
    </>
  )
}

export const WebModalForm = () => {
  return (
    <>
      <p>Web</p>
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

