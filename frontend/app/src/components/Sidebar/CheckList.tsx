import { List, ThemeIcon } from "@mantine/core"
import { CircleCheck } from "tabler-icons-react"

const CheckList = () => {
  return (
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color='teal' size={24} radius="xl" >
          <CircleCheck size={16} />
        </ThemeIcon>
      }
    >
      <List.Item>適切にポート番号が設定されている</List.Item>
      <List.Item>適切な順序でネットワーク機器がつながっている</List.Item>
      <List.Item>Lanのなかにあるネットワーク機器は問題文通りに設定されている</List.Item>
    </List>
  )
}


export default CheckList
