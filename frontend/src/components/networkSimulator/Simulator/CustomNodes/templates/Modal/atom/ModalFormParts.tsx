import styles from "./ModalFormParts.module.css";

export const RequestPortForm = () => {
  return (
    <>
      <label htmlFor="">Request Port: </label>
      <input className={styles['modal-form']} type="text" name="requestPort" id="requestPort" />
    </>
  )
}

export const ResponsePortForm = () => {
  return (
    <>
      <label htmlFor="">Response Port: </label>
      <input className={styles['modal-form']} type="text" name="responsePort" id="responsePort" />
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

export const InBound = () => {
  return (
    <>
      <label htmlFor="">inBound: </label>
      <input className={styles['modal-form']} type="text" name="inBound" id="inBound" />
    </>
  )
}


export const OutBound = () => {
  return (
    <>
      <label htmlFor="">outBound: </label>
      <input className={styles['modal-form']} type="text" name="outBound" id="outBound" />
    </>
  )
}
