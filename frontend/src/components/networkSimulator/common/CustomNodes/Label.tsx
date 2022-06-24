import useStore from "../../store"

export const Label = ({ data }) => {
  const { setFocusNode, setToggleForm } = useStore()
  return (
    <label onDoubleClick={(e) => setFocusNode(e, setToggleForm)} htmlFor="text">{data.label}</label>
  )
}
