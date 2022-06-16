export const ReqResForm = ({ type, nodeId, register }) => {
  return (
    <>
      <label htmlFor="">Request Port:</label>
      <input {...register(`${type}${nodeId}requestPort`)} />
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
      <label htmlFor="">Outbound Port:</label>
      <input {...register(`${type}${nodeId}outboundPort`)} />
    </>
  )
}
