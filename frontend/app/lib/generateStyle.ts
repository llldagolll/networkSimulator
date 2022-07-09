import { CustomNodeType } from "@/store"
import { NodeStyle } from "./Style"


export const generateStyle = (type: CustomNodeType) => {
  const baseStyle: NodeStyle = {
    padding: '10px',
    borderRadius: '3px',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#1a192b',
    fontSize: '12px',
    color: '#222',
  }

  const nodeStyle = {
    ...baseStyle,
    background: '#fff',
    textAlign: 'center',
  }

  const lanStyle = {
    ...baseStyle,
    width: '150px',
    height: '200px',
    background: 'rgba(255,0,0,0.2)'
  }

  return type === 'Lan' ? lanStyle : nodeStyle
}
