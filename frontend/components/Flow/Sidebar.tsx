import InputEc2Node from "./atom/DnDFlow/InputWebServerNode";
import InputGatewayNode from "./atom/DnDFlow/InputGatewayNode";
import InputClientNode from "./atom/DnDFlow/InputClientNode";
import InputLanNode from "./atom/DnDFlow/InputLanNode";

const Sidebar = () => {
  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right</div>
      <InputGatewayNode />
      <InputEc2Node />
      <InputClientNode />
      <InputLanNode />
    </aside>
  )
}

export default Sidebar
