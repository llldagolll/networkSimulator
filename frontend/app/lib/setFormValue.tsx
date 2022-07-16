
export const setFormValue = ({ node, Form }) => {

  let newNode = {
    ...node,
  }

  newNode.data = {
    ...node.data,
    ...Form
  }

  return newNode
}
