import { useState } from "react"


export const useIsShowToggle = () => {
  const [show, setShow] = useState(false)
  const toggle = () => setShow(!show)
  return { show, toggle }
}

