import { useIsShowToggle } from "../../hooks/useShowToggle";
import { AddNode } from "./AddNode";
import styles from './Sidebar.module.css'
import { SidebarForm } from "./SidebarForm";
import useStore from '@/store'
import { useForm } from "react-hook-form";



export interface Form {
  id: string,
  type: string,
  requestPort?: string
  responsePort?: string
  inboundPort?: string
  outboundPort?: string
}



export const Sidebar = () => {
  const { show: showSidebar, toggle: setToggleSidebar } = useIsShowToggle(true);
  const { showForm, setToggleForm, focusNode, submitForm, } = useStore()
  const { register, handleSubmit } = useForm();

  let sidebarStyle = { width: showSidebar ? '30%' : '0' }

  const { id, type } = focusNode

  let Form: Form = { id, type }

  const onSubmit = (dt) => {
    switch (type) {
      case 'Client':
      case 'Web': {
        Form.requestPort = dt[`${type}${id}requestPort`]
        Form.responsePort = dt[`${type}${id}responsePort`]
        break;
      }
      case 'Gateway':
      case 'Lan': {
        Form.inboundPort = dt[`${type}${id}inboundPort`]
        Form.outboundPort = dt[`${type}${id}outboundPort`]
        break;
      }

      default:
        break;
    }
    submitForm(Form)
  }



  return (
    <>
      <div className={styles.content}>
        <span onClick={setToggleSidebar} className={styles['toggle-sidebar']}>
          &#9776;
        </span>
        {
          showForm
            ?
            <>
              <SidebarForm
                id={id}
                type={type}
                onSubmit={handleSubmit(onSubmit)}
                onClick={setToggleSidebar}
                setToggleForm={setToggleForm}
                register={register}
                sidebarStyle={sidebarStyle}
              />
            </>
            :
            <>
              <AddNode
                sidebarStyle={sidebarStyle}
                onClick={setToggleSidebar}
              />
            </>
        }
      </div>
    </>
  )
}
