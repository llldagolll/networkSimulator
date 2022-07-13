
export const setFormValue = ({ node, Form }) => {
  const {
    id,
    type,
    position,
    style
  } = node

  const {
    inboundPort,
    outboundPort,
    requestPort,
    responsePort,
  } = Form


  let newNode = {
    id,
    type,
    data: {
      label: `${id} ${type}`,
      type,
      id,
      inboundPort,
      outboundPort,
      requestPort,
      responsePort,
    },
    position,
    style,
  }

  return newNode
}
