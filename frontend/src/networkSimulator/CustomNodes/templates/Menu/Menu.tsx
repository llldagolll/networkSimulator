import useStore, { CustomNode } from '../../../store'
import { Group } from './Group';
import { group } from './types';
import { UnGroup } from './UnGroup';



const Menu = ({ nodeId, toggleMenu }) => {
  const { nodes, lans, isGroup, setGroup, unSetGroup, getLan, getNode } = useStore()


  const props: group = {
    lans,
    nodes,
    nodeId,
    setGroup,
    unSetGroup,
    toggleMenu
  }

  console.log(`Menu`);


  return (
    isGroup(nodeId) ? <UnGroup {...props} /> : <Group {...props} />
  )
}

export default Menu
