import { Handle, Position } from "react-flow-renderer";
import { TemplateLan } from "../common/TemplateNode/TemplateNode";


const LanTemplates = ({ nodeName }: { nodeName: string }) => {
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
