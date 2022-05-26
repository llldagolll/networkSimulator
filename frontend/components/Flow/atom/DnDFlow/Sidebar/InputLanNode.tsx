
const InputLanNode = () => {
  const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: any) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move'
  }
  return (
    <>
      {/*@ts-ignore*/}
      <div className="dndnode" onDragStart={(event: React.DragEvent<HTMLDivElement>) => onDragStart(event, 'lan')} draggable>
        LAN Node
      </div>
    </>
  )
}

export default InputLanNode
