import { Handle, Position } from "react-flow-renderer";
import { TemplateLan } from "../common/TemplateNode/TemplateNode";
import { CustomNodeType } from "@/components/networkSimulator/Simulator/store"


const LanTemplates = ({ nodeName }: { nodeName: CustomNodeType }) => {
  return (
    <TemplateLan>
      <div>
        <label htmlFor="text">{nodeName}</label>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </TemplateLan >
  );
}

export default LanTemplates
