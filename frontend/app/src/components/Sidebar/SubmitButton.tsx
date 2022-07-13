import { Button } from "@mantine/core"
import { ArrowUpCircle } from "tabler-icons-react"

const SubmitButton = ({ Loading, onClick }) => {
  return (
    <>
      {Loading ?
        <Button
          leftIcon={<ArrowUpCircle size={14} />}
          onClick={onClick}
          fullWidth
          loading
        >
          回答中
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
