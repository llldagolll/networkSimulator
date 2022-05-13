const InputClientNode = () => {
  const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: any) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move'
  }
  return (
    <>
      {/*@ts-ignore*/}
      <div className="dndnode output" onDragStart={(event: React.DragEvent<HTMLDivElement>) => onDragStart(event, 'output')} draggable>
        Client
      </div>
    </>
  )
}

export default InputClientNode
