import useStore from '@/networkSimulator/store';
import { Group } from './Group';
import { group } from './types';
import { UnGroup } from './UnGroup';



const Menu = ({ nodeId, toggleMenu }) => {
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
    isGroup(nodeId) ? <UnGroup {...props} /> : <Group {...props} />
  )
}

export default Menu
