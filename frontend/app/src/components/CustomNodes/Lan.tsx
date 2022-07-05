import { Label } from "./Label";
import TemplateNode from "./templates/TemplateNode";

const Lan = ({ data }) => {
  return (
    <TemplateNode
      data={data}
    >
      <Label data={data} />
    </TemplateNode>
  );
}

export default Lan
