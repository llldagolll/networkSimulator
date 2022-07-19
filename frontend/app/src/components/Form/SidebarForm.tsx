import { ReqResForm, InboundOutboundForm } from "./SidebarFormParts"
import styles from '../Sidebar/Sidebar.module.css'


export const SidebarForm = ({
  id,
  type,
  onSubmit,
  register,
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
    <>
      <button onClick={setToggleForm} className={styles['close-sidebar']}>
        &times;
      </button>

      <p>{id}</p>
      <form action="" onSubmit={onSubmit}>
        {Form}
        <button type='submit' hidden />
      </form>
    </>
  )
}
