import styles from './Nodes.module.css'


const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: any) => {
  event.dataTransfer.setData('application/reactflow', nodeType);
  event.dataTransfer.effectAllowed = 'move'
}


export const NodeInSidebar = ({ nodeName }) => {
  return (
    <div className={`${styles.dndnode}`}
      onDragStart={(event: React.DragEvent<HTMLDivElement>) =>
        onDragStart(event, nodeName)}
      draggable
    >
      {nodeName}
    </div>
  )

}

