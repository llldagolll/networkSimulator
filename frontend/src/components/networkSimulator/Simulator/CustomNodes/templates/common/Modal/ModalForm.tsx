import { RequestPortForm, ResponsePortForm } from './atom/ModalFormParts'
import styles from './ModalForm.module.css'


interface modal {
  show: boolean,
  onClick: (e) => void,
  content: any,
}



export const ModalForm = () => {
  return (
    <>
      <form action="">
        <RequestPortForm />
        <ResponsePortForm />
      </form>
    </>
  )
}



export const Modal = ({ show, onClick, content }: modal) => {
  if (show) {
    return (
      <div className={styles['modal-content']} >
        <p>{content}</p>
        <p><button className={styles['modal-button']} onClick={onClick}>Close</button></p>
      </div >
    )
  }
}

