export const ReqResForm = ({ type, nodeId, register }) => {
  return (
    <>
      <label htmlFor="">Request Port:</label>
      <input {...register(`${type}${nodeId}requestPort`)} />
      <br />
      <label htmlFor="">Response Port:</label>
      <input {...register(`${type}${nodeId}responsePort`)} />
    </>
  )
}

export const InboundOutboundForm = ({ type, nodeId, register }) => {
  return (
    <>
      <label htmlFor="">Inbound Port:</label>
      <input {...register(`${type}${nodeId}inboundPort`)} />
      <br />
      <label htmlFor="">Outbound Port:</label>
      <input {...register(`${type}${nodeId}outboundPort`)} />
    </>
  )
}
