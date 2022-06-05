import { useState } from "react";
import { TemplateModal, ClientModalForm, GatewayModalForm, LanModalForm, WebModalForm } from "../Modal/ModalForm";
import styles from "./TemplateNode.module.css";


const getNodeType = (e) => e.target.innerText



export const TemplateNode = (props) => {
  const [show, setShow] = useState(false)


  const openModal = (e) => {
    e.preventDefault()

    // switch (nodeType) {
    //   case 'Client':
    //     Modal = <TemplateModal show={show} onClick={closeModal} content={<ClientModalForm />} />
    //     break;

    //   case 'Gateway':
    //     Modal = <TemplateModal show={show} onClick={closeModal} content={<GatewayModalForm />} />
    //     break;

    //   case 'Web':
    //     Modal = <TemplateModal show={show} onClick={closeModal} content={<WebModalForm />} />
    //     break;

    //   default:
    //     break;
    // }


    setShow(true)
  }

  const closeModal = (e) => {
    e.preventDefault()
    setShow(false)
  }

  let Modal = <TemplateModal show={show} onClick={closeModal} content={<ClientModalForm />} />


  return (
    <>
      <div className={styles.node} onDoubleClick={openModal}>
        {props.children}
      </div>
      {Modal}
      {/* <Modal show={show} onClick={closeModal} content={<ModalForm />} /> */}
    </>
  );
}



export const TemplateLan = (props) => {
  const [show, setShow] = useState(false)

  const closeModal = (e) => {
    e.preventDefault()
    setShow(false)
  }

  const openModal = (e) => {
    e.preventDefault()
    setShow(true)
  }


  return (
    <>
      <div className={styles.lan} onDoubleClick={openModal}>
        {props.children}
      </div>
    </>
  );
}
