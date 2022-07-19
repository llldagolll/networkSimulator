import Form from "./atom/Form"


interface Props {
  type:string;
  nodeId:string;
  register:any;
}



export const ReqResForm = (props:Props) => {
  return (
    <>
      <Form label="Request Port" {...props} />
      <br />
      <Form label="Response Port " {...props} />
    </>
  )
}

export const InboundOutboundForm = (props:Props) => {
  return (
    <>
      <Form label="Inbound Port " {...props} />
      <br />
      <Form label="Outbound Port " {...props} />
    </>
  )
}

export const EC2Form = (props:Props) => {
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


export const LanForm = (props:Props) => {

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
