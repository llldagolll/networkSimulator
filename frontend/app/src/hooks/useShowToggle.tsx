import { useCallback, useState } from "react"

export const useIsShowToggle = (initialState: boolean = false): { show: boolean, toggle: () => void } => {
  const [show, setShow] = useState(initialState)
  const toggle = useCallback(() => {
    setShow(show => !show);
  }, [])
  return { show, toggle }
}
