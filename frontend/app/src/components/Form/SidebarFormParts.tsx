import Form from "./atom/Form"

export const ReqResForm = ({ type, nodeId, register }) => {
  const props = {
    type,
    nodeId,
    register
  }
  return (
    <>
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
      <Form label="Inbound Port " {...props} />
      <br />
      <Form label="Outbound Port " {...props} />
    </>
  )
}

export const EC2Form = ({ type, nodeId, register }) => {
  const props = {
    type,
    nodeId,
    register
  }

  return (
    <>
      <ReqResForm {...props} />
      <br />
      <Form label="Ip Address" {...props} />
      <br />
      <Form label="Security Group " {...props} />
    </>
  )
}


export const LanForm = ({ type, nodeId, register }) => {
  const props = {
    type,
    nodeId,
    register
  }

  return (
    <>
      <InboundOutboundForm {...props} />
      <br />
      <Form label="Subnet Mask " {...props} />
      <br />
      <Form label="Network ACL " {...props} />
      <br />
      <Form label="Route Table" {...props} />

    </>
  )
}
