import { Node } from 'react-flow-renderer'

const id = '0'
const type = 'Client'

export default [
  {
    id: id,
    type: type,
    data: {
      label: `${id} ${type}`,
      nodeId: `${type}`,
      nodeType: `${type}`,
    },
    position: { x: 250, y: 5 },
  },
] as Node[];

