import styles from "./ModalFormParts.module.css";


export const RequestPortForm = ({ type, nodeId, register }) => {
  return (
    <>
      <label htmlFor="">Request Port:</label>
      <input {...register(`${type}${nodeId}requestPort`)} className={styles['modal-form']} />
    </>
  )
}



export const ResponsePortForm = ({ type, nodeId, register }) => {
  return (
    <>
      <label htmlFor="">Response Port: </label>
      <input {...register(`${type}${nodeId}responsePort`)} className={styles['modal-form']} />
    </>
  )
}



export const InboundForm = ({ type, nodeId, register }) => {
  return (
    <>
      <label htmlFor="">inbound: </label>
      <input {...register(`${type}${nodeId}inboundPort`)} className={styles['modal-form']} />
    </>
  )
}


export const OutboundForm = ({ type, nodeId, register }) => {
  return (
    <>
      <label htmlFor="">outbound: </label>
      <input {...register(`${type}${nodeId}outboundPort`)} className={styles['modal-form']} />
    </>
  )
}
