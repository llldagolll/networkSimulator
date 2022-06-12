import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  example: string,
  exampleRequired: string,
}

const TestPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit: SubmitHandler<Inputs> = data => alert(JSON.stringify(data));
  console.log(watch('example'));


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue='test' {...register('example')} />
      <input {...register('exampleRequired', { required: true })} />
      {errors.exampleRequired && <span>this filed is required</span>}
      <input type="submit" value="submit" hidden />
    </form>
  )
}

export default TestPage
