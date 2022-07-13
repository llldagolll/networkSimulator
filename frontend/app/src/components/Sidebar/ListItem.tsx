
import { List, ThemeIcon } from "@mantine/core"
import { CircleCheck, CircleX } from "tabler-icons-react"


const ListItem = ({ isDone, children }) => {
  return (
    <>
      <List.Item
        icon={isDone
          ?
          <ThemeIcon color='teal' size={24} radius="xl" >
            <CircleCheck size={16} />
          </ThemeIcon>
          :
          <ThemeIcon color='red' size={24} radius="xl" >
            <CircleX size={16} />
          </ThemeIcon>
        }
      >
        {children}
      </List.Item>
    </>
  )
}


export default ListItem;


