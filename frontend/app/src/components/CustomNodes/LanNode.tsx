import { Label } from "./Label";
import TemplateNode from "./templates/TemplateNode";

const LanNode = ({ data }) => {
  return (
    <TemplateNode
      data={data}
    >
      <Label data={data} />
    </TemplateNode>
  );
}

export default LanNode
