import styles from './Nodes.module.css'


const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: any) => {
  event.dataTransfer.setData('application/reactflow', nodeType);
  event.dataTransfer.effectAllowed = 'move'
}

export const InputClientNode = () => {
  return (
    <>
      {/*@ts-ignore*/}
      <div className={`${styles.dndnode} ${styles.dndnodeOutput}`} onDragStart={(event: React.DragEvent<HTMLDivElement>) => onDragStart(event, 'client')} draggable>
        Client
      </div>
    </>
  )
}


export const InputGatewayNode = () => {
  return (
    <>
      {/*@ts-ignore*/}
      <div className={styles.dndnode} onDragStart={(event: React.DragEvent<HTMLDivElement>) => onDragStart(event, 'gateway')} draggable>
        Gateway
      </div>
    </>
  )
}


export const InputLanNode = () => {
  return (
    <>
      {/*@ts-ignore*/}
      <div className={styles.dndnode} onDragStart={(event: React.DragEvent<HTMLDivElement>) => onDragStart(event, 'lan')} draggable>
        LAN
      </div>
    </>
  )
}


export const InputWebServerNode = () => {
  return (
    <>
      {/*@ts-ignore*/}
      <div className={styles.dndnode} onDragStart={(event: React.DragEvent<HTMLDivElement>) => onDragStart(event, 'web')} draggable>
        Web
      </div>
    </>
  )
}
