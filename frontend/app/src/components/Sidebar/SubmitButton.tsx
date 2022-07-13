import { useModals } from "@mantine/modals"
import { ArrowUpCircle } from "tabler-icons-react"
import { Button, Text } from '@mantine/core';

const SubmitButton = ({ Loading, submitAnswer }) => {
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
    onConfirm: () => console.log('Submit'),
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
          onClick={onClick}
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
