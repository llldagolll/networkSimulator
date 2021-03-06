import useStore from '@/store';
import { Group } from './Group';
import { group } from './types';
import { UnGroup } from './UnGroup';




const NodeMenu = ({ props, isGroup, nodeId }) => {

  return (
    isGroup(nodeId) ? <UnGroup {...props} /> : <Group {...props} />
  )
}

const LanMenu = ({ nodes, nodeId, unSetGroup, setToggleMenu, }: group) => {
  const lanId = nodeId
  return (
    <>
      {
        nodes
          .filter(node => node.type !== 'Lan')
          .filter(node => node.parentNode == lanId)
          .map(node =>
            <button
              onClick={() => {
                unSetGroup({ nodeId: node.id, lanId })
                setToggleMenu()
              }}
              key={node.id}
            >
              {`node ${node.id}`}
            </button>
          )
      }
    </>
  )
}





const Menu = ({ nodeId, setToggleMenu, type }) => {
  const { nodes, lans, isGroup, setGroup, unSetGroup } = useStore()
  const props: group = {
    lans,
    nodes,
    nodeId,
    setGroup,
    unSetGroup,
    setToggleMenu,
  }


  return (
    type == 'Lan'
      ? <LanMenu {...props} />
      : <NodeMenu props={props} isGroup={isGroup} nodeId={nodeId} />
  )
}

export default Menu
