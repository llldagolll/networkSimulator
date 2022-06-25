import { useIsShowToggle } from "../../hooks/useShowToggle";
import { AddNode } from "./AddNode";
import styles from './Sidebar.module.css'
import { SidebarForm } from "./SidebarForm";
import useStore from '@/networkSimulator/store'
import { useForm } from "react-hook-form";
import { useRef } from "react";



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
  const { showForm, setToggleForm, focusNode, } = useStore()
  const { register, handleSubmit } = useForm();
  const { nodes } = useStore()

  let sidebarStyle = { width: showSidebar ? '30%' : '0' }

  const { id, type } = focusNode

  //TODO: Form の宣言を消す
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
    sessionStorage.setItem(`${id}`, JSON.stringify(Form))
  }



  return (
    <>
      <span onClick={setToggleSidebar} className={styles['toggle-sidebar']}>
        &#9776;
      </span>
      <div className={styles.content}>
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

        <button style={{

        }} onClick={() => console.log(nodes)
        }>回答</button>
      </div>
    </>
  )
}

export default Sidebar
