import { memo } from 'react';
import useStore, { CustomNode } from '../../../../store'
import styles from './Menu.module.css'


interface Group {
  nodeId: string;
  toggleMenu: () => void
  lans?: CustomNode[]
  nodes?: CustomNode[]
  setGroup?: ({ lanId, nodeId }) => void;
  unSetGroup?: ({ lanId, nodeId }) => void;
}


const Group = memo(({ lans, nodeId, setGroup, toggleMenu }: Group) => {

  return (
    <>
      {
        lans.map((lan) =>
          <button
            onClick={() => {
              setGroup({ lanId: lan.id, nodeId })
              toggleMenu()
            }}
            className={styles.MenuItem}
            key={lan.id}
          >
            {`lan ${lan.id}`}
          </button>
        )
      }
    </>
  )
}
)


const UnGroup = memo(({ nodes, nodeId, unSetGroup, toggleMenu }: Group) => {

  const getLanId = ({ nodes, nodeId }) => nodes.find(node => node.id === nodeId).parentNode

  console.log(`UnGroup`);

  const lanId = getLanId({ nodes, nodeId })
  return (
    <button
      onClick={async () => {
        unSetGroup({ lanId, nodeId })
        toggleMenu()
      }}
      className={styles.MenuItem}
    >
      解除
    </button>
  )
}
)


const Menu = ({ nodeId, toggleMenu }) => {
  const { nodes, lans, isGroup, setGroup, unSetGroup } = useStore()

  const props: Group = {
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
