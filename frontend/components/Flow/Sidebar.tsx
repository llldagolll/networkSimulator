import InputClientNode from "./atom/DnDFlow/Sidebar/InputClientNode"
import InputGatewayNode from "./atom/DnDFlow/Sidebar/InputGatewayNode"
import InputLanNode from "./atom/DnDFlow/Sidebar/InputLanNode"
import InputTextUpdaterNode from "./atom/DnDFlow/Sidebar/InputTextUpdaterNode"
import InputWebNode from "./atom/DnDFlow/Sidebar/InputWebNode"

const Sidebar = () => {
  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right</div>
      <InputGatewayNode />
      <InputClientNode />
      <InputLanNode />
      <InputTextUpdaterNode />
      <InputWebNode />
    </aside>
  )
}

export default Sidebar
