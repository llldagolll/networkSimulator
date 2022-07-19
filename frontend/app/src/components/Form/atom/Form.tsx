import { FormInterface } from "../interface"



const generateName = (label: string): string => {
  const nameAry = label.split(' ')
  return nameAry[0].slice(0, 1).toLowerCase() + nameAry[0].slice(1) + nameAry[1]
}

const Form = ({ label, register, type, nodeId }: FormInterface) => {
  const name = generateName(label)

  return (
    <>
      <label htmlFor="">{label}:</label>
      <input {...register(`${type}${nodeId}${name}`)} />
    </>
  )
}

export default Form
