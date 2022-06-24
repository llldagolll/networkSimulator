import { useIsShowToggle } from "../hooks/useShowToggle";
import { AddNode } from "./AddNode";
import styles from './Sidebar.module.css'
import { SidebarForm } from "./SidebarForm";
import useStore from '@/components/networkSimulator/store'
import { useForm } from "react-hook-form";



interface Form {
  id: string,
  type: string,
  requestPort?: string
  responsePort?: string
  inboundPort?: string
  outboundPort?: string
}



const Sidebar = () => {
  const { show: showSidebar, toggle: setToggleSidebar } = useIsShowToggle(true);
  const { showForm, setToggleForm, focusNode, setSidebarFormState, setFormToNode } = useStore()
  const { register, handleSubmit } = useForm();
  let sidebarStyle = { width: showSidebar ? '30%' : '0' }

  const { id, type } = focusNode

  const Form: Form = {
    id,
    type
  }
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

    setFormToNode(Form)
    // sessionStorage.setItem(`${id}`, JSON.stringify(Form))
    // setSidebarFormState(JSON.stringify(Form))
    return
  }

  return (
    <div className={styles.content}>
      <span onClick={setToggleSidebar} className={styles['toggle-sidebar']}>
        &#9776;
      </span>
      {showSidebar &&
        <AddNode
          sidebarStyle={sidebarStyle}
          setToggleSidebar={setToggleSidebar}
        />
      }
      {
        showForm &&
        <SidebarForm
          id={id}
          type={type}
          onSubmit={handleSubmit(onSubmit)}
          onClick={setToggleForm}
          register={register}
          sidebarStyle={sidebarStyle}
        />
      }
    </div>
  )
}

export default Sidebar
