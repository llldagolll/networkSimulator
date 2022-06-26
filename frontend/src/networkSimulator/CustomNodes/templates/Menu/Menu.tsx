import useStore from '@/networkSimulator/store';
import { Group } from './Group';
import { group } from './types';
import { UnGroup } from './UnGroup';




const NodeMenu = ({ props, isGroup, nodeId }) => {

  return (
    isGroup(nodeId) ? <UnGroup {...props} /> : <Group {...props} />
  )
}

const LanMenu = ({ nodes, nodeId, unSetGroup, toggleMenu }: group) => {
  const lanId = nodeId
  return (
    <>
      {
        nodes
          .filter(node => node.type !== 'Lan')
          .map(node =>
            <button
              onClick={async () => {
                await unSetGroup({ nodeId: node.id, lanId })
                await toggleMenu()
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





const Menu = ({ nodeId, toggleMenu, type }) => {
  const { nodes, lans, isGroup, setGroup, unSetGroup } = useStore()
  const props: group = {
    lans,
    nodes,
    nodeId,
    setGroup,
    unSetGroup,
    toggleMenu
  }


  return (
    type == 'Lan'
      ? <LanMenu {...props} />
      : <NodeMenu props={props} isGroup={isGroup} nodeId={nodeId} />
  )
}

export default Menu
