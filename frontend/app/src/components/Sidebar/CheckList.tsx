import { List, ThemeIcon } from "@mantine/core"
import { useState } from "react"
import { CircleCheck, CircleX } from "tabler-icons-react"
import ListItem from "./ListItem"





const CheckList = () => {
  const checkItems: { ProblemStatement: string, isDone: boolean }[] = [
    { ProblemStatement: '適切にポート番号が設定されている', isDone: false },
    { ProblemStatement: '適切な順序でネットワーク機器がつながっている', isDone: false },
    { ProblemStatement: 'Lanのなかにあるネットワーク機器は問題文通りに設定されている', isDone: true },
  ]

  return (
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color='red' size={24} radius="xl" >
          <CircleX size={16} />
        </ThemeIcon>
      }
    >
      {
        checkItems.map(
          (checkItem, i) => <ListItem key={i} isDone={checkItem['isDone']}>
            {checkItem['ProblemStatement']}
          </ListItem>)
      }
    </List>
  )
}


export default CheckList
