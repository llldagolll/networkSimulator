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
  const { nodes, edges, showForm, setToggleForm, focusNode, submitForm, } = useStore()
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

  const submitAnswer = (e: React.MouseEvent) => {
    e.preventDefault()
    const username = sessionStorage.getItem('username')

    const ans = {
      [username]: {
        nodes: [nodes],
        edges: [edges],
      }
    }
    console.log(ans);
  }


  return (
    <>
      <div className={styles.content}>
        <span onClick={setToggleSidebar} className={styles['toggle-sidebar']}>
          &#9776;
        </span>
        <div className={styles.sidebar} style={sidebarStyle}>
          {
            showForm
              ?
              <SidebarForm
                id={id}
                type={type}
                onSubmit={handleSubmit(onSubmit)}
                setToggleForm={setToggleForm}
                register={register}
              />
              :
              <AddNode
                setToggleSidebar={setToggleSidebar}
              />
          }
          <button className={styles.btn} onClick={submitAnswer}>回答</button>
        </div>
      </div>
    </>
  )
}
