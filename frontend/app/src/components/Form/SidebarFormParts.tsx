import Form from "./atom/Form"

export const ReqResForm = ({ type, nodeId, register }) => {
  const props = {
    type,
    nodeId,
    register
  }
  return (
    <>
      <Form label="Ip Address" {...props} />
      <br />
      <Form label="Request Port" {...props} />
      <br />
      <Form label="Response Port " {...props} />
    </>
  )
}

export const InboundOutboundForm = ({ type, nodeId, register }) => {
  const props = {
    type,
    nodeId,
    register
  }
  return (
    <>
      <Form label="Ip Address" {...props} />
      <br />
      <Form label="Inbound Port " {...props} />
      <br />
      <Form label="Outbound Port " {...props} />
    </>
  )
}
