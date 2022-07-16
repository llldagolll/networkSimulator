import { useIsShowToggle } from "../../hooks/useShowToggle";
import { AddNode } from "./AddNode";
import styles from './Sidebar.module.css'
import { SidebarForm } from "./SidebarForm";
import useStore from '@/store'
import { useForm } from "react-hook-form";
import CheckList from "./CheckList";
import { useState } from "react";
import SubmitButton from "./SubmitButton";
import PloblemStatement from "./SidebarPloblemStatement";



export interface Form {
  id: string,
  type: string,
  requestPort?: string
  responsePort?: string
  inboundPort?: string
  outboundPort?: string
}



export const Sidebar = ({ question, nextPage }: { question: string, nextPage: string }) => {
  const { show: showSidebar, toggle: setToggleSidebar } = useIsShowToggle(true);
  const { nodes, edges, showForm, setToggleForm, focusNode, submitForm, } = useStore()
  const { register, handleSubmit } = useForm();
  const [Loading, setLoading] = useState(false)

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
    console.log(Form);

    submitForm(Form)
  }

  const submitAnswer = () => {
    const username = sessionStorage.getItem('username')

    const ans = {
      [username]: {
        nodes: [nodes],
        edges: [edges],
      }
    }
    console.log(ans);
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000);

  }



  return (
    <>
      <div className={styles.content}>
        <span onClick={setToggleSidebar} className={styles['toggle-sidebar']}>
          &#9776;
        </span>
        <div className={styles.sidebar} style={sidebarStyle}>
          <div>
            <PloblemStatement question={question} />
          </div>
          {/* <hr style={{ border: "1px solid red" }} /> */}

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
          <div className={styles.bottom}>
            <CheckList />
            <SubmitButton Loading={Loading} submitAnswer={submitAnswer} path={nextPage} />
          </div>
        </div>
      </div>
    </>
  )
}
