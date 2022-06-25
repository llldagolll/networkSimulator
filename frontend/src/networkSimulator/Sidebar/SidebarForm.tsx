import { ReqResForm, InboundOutboundForm } from "./atom/ModalFormParts"
import styles from './Sidebar.module.css'


export const SidebarForm = ({ id, type, onSubmit, register, onClick, sidebarStyle }) => {
  let Form

  switch (type) {
    case 'Client':
    case 'Web': {
      Form = <ReqResForm type={type} nodeId={id} register={register} />
      break
    }
    case 'Lan':
    case 'Gateway': {
      Form = <InboundOutboundForm type={type} nodeId={id} register={register} />
      break;
    }
    default:
      break;
  }

  return (
    <div className={styles.sidebar} style={sidebarStyle}>
      <p>{id}</p>
      <form action="" onSubmit={onSubmit}>
        {Form}
        <button type='submit' hidden />
      </form>
      <button className={styles['modal-button']} onClick={onClick}>Close</button>
    </div>
  )
}
