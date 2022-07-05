import { ReqResForm, InboundOutboundForm } from "./atom/ModalFormParts"
import { TemplateSidebar } from "./atom/TemplateSidebar"
import styles from './Sidebar.module.css'


export const SidebarForm = ({
  id,
  type,
  onSubmit,
  register,
  onClick,
  sidebarStyle,
  setToggleForm }) => {

  let Form



  switch (type) {
    case 'Lan':
    case 'Gateway': {
      Form = <InboundOutboundForm type={type} nodeId={id} register={register} />
      break;
    }
    default:
      Form = <ReqResForm type={type} nodeId={id} register={register} />
      break;
  }

  return (
    <TemplateSidebar sidebarStyle={sidebarStyle} onClick={onClick}>
      <p>{id}</p>
      <form action="" onSubmit={onSubmit}>
        {Form}
        <button type='submit' hidden />
      </form>
      <button className={styles['modal-button']} onClick={setToggleForm}>Back</button>
    </TemplateSidebar>
  )
}
