import { useModals } from "@mantine/modals"
import { ArrowUpCircle } from "tabler-icons-react"
import { Button, Text } from '@mantine/core';
import Router from "next/router";

const SubmitButton = ({ Loading, submitAnswer, path }) => {
  const modals = useModals()

  const openSubmitModal = () => modals.openConfirmModal({
    title: '',
    children: (
      <Text size="sm">
        正解！
      </Text>
    ),
    labels: { confirm: '次の問題へ', cancel: '解きなおす' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => Router.push(path),
  });

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault()
    submitAnswer()
    setTimeout(() => openSubmitModal(), 3000)
  }



  return (
    <>
      {Loading ?
        <Button
          leftIcon={<ArrowUpCircle size={14} />}
          fullWidth
          loading
        >
          答え合わせ中
        </Button >
        :
        <Button
          leftIcon={<ArrowUpCircle size={14} />}
          onClick={onClick}
          fullWidth
        >
          回答
        </Button >


      }

    </>
  )
}

export default SubmitButton
