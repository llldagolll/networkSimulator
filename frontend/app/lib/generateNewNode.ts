import { NewNode } from "@/components/Simulator/types";
import { CustomNodeType } from "@/store";
import { generateStyle } from "./generateStyle";

export const generateNewNode = ({ id, type, position }: { id: string, type: CustomNodeType, position: { x: number, y: number } }): NewNode => {
  const style = generateStyle(type);
  let newNode = {
    id,
    type,
    data: {
      label: `${id} ${type}`,
      type,
      id,
      inboundPort: "",
      outboundPort: "",
      requestPort: "",
      responsePort: "",
    },
    position,
    style,
  }

  // return type === 'Lan' ? { ...newNode, zindex: 1 } : newNode
  return newNode
}
