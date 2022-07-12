import type { NextPage } from 'next'
import Router from 'next/router'
import { useRef } from 'react'
import styles from './index.module.css'

const Signin: NextPage = () => {
  const ref: React.RefObject<HTMLInputElement> = useRef()

  const handler = (path: string) => {
    Router.push(path)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    sessionStorage.setItem('username', ref.current.value)
    handler('/simulator')
  }


  return (
    <>
      <form>
        <input type="text" placeholder='your name' ref={ref} />
        <button type="submit" onClick={onSubmit} hidden />
      </form>
      <br />
    </>
  )
}


export default Signin
