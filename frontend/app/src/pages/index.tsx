import { Center } from '@mantine/core'
import type { NextPage } from 'next'
import Router from 'next/router'
import { useRef } from 'react'

const Signin: NextPage = () => {
  const ref: React.RefObject<HTMLInputElement> = useRef()


  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    sessionStorage.setItem('username', ref.current.value)
    Router.push('/question1')
  }


  return (
    <Center style={{ height: '100vh', width: '100vw' }}>
      <form>
        <input type="text" placeholder='your name' ref={ref} />
        <button type="submit" onClick={onSubmit} hidden />
      </form>
    </Center>
  )
}


export default Signin
