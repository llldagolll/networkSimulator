import { useIsShowToggle } from "../../hooks/useShowToggle";
import { AddNode } from "./AddNode";
import styles from './Sidebar.module.css'
import { SidebarForm } from "../Form/SidebarForm";
import useStore from '@/store'
import { useForm } from "react-hook-form";
import CheckList from "./CheckList";
import { useState } from "react";
import SubmitButton from "./SubmitButton";
import PloblemStatement from "./SidebarPloblemStatement";
import { FormContents } from "../Form/interface";



export const Sidebar = ({ question, nextPage }: { question: Object, nextPage: string }) => {
  const { show: showSidebar, toggle: setToggleSidebar } = useIsShowToggle(true);
  const { nodes, edges, showForm, setToggleForm, focusNode, submitForm, } = useStore()
  const { register, handleSubmit } = useForm();
  const [Loading, setLoading] = useState(false)

  let sidebarStyle = { width: showSidebar ? '30%' : '0' }

  const { id, type } = focusNode

  let Form: FormContents = { id, type }

  const onSubmit = (dt: { [x: string]: string; }) => {
    switch (type) {
      case 'Gateway': {
        Form.inboundPort = dt[`${type}${id}inboundPort`]
        Form.outboundPort = dt[`${type}${id}outboundPort`]
        Form.ipAddress = dt[`${type}${id}ipAddress`]
      }
      case 'Lan': {
        Form.subnetMask = dt[`${type}${id}subnetMask`]
        Form.networkACL = dt[`${type}${id}networkACL`]
        Form.routeTable = dt[`${type}${id}routeTable`]
        break;
      }
      default: {
        Form.requestPort = dt[`${type}${id}requestPort`]
        Form.responsePort = dt[`${type}${id}responsePort`]
        Form.ipAddress = dt[`${type}${id}ipAddress`]
        Form.securityGroup = dt[`${type}${id}securityGroup`]
        break;
      }
    }
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
