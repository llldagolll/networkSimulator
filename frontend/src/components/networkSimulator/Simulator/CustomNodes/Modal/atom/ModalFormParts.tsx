import styles from "./ModalFormParts.module.css";

export const RequestPortForm = ({ requestRef }) => {
  return (
    <>
      <label htmlFor="">Request Port: </label>
      <input ref={requestRef} className={styles['modal-form']} type="text" name="requestPort" id="requestPort" />
    </>
  )
}

export const ResponsePortForm = ({ responseRef }) => {
  return (
    <>
      <label htmlFor="">Response Port: </label>
      <input ref={responseRef} className={styles['modal-form']} type="text" name="responsePort" id="responsePort" />
    </>
  )
}


export const IpAddressForm = () => {
  return (
    <>
      <label htmlFor="">IP Address: </label>
      <input className={styles['modal-form']} type="text" name="ipAddress" id="ipAddress" />
    </>
  )
}

export const InboundForm = ({ inboundRef }) => {
  return (
    <>
      <label htmlFor="">inbound: </label>
      <input ref={inboundRef} className={styles['modal-form']} type="text" name="inBound" id="inBound" />
    </>
  )
}


export const OutboundForm = ({ outboundRef }) => {
  return (
    <>
      <label htmlFor="">outbound: </label>
      <input ref={outboundRef} className={styles['modal-form']} type="text" name="outBound" id="outBound" />
    </>
  )
}
