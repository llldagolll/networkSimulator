
export type NewNode = {
  id: string,
  type: string,
  position: { x: number, y: number },
  data: {
    label: string,
    id: string,
    type: string,
  }
  style?: any,
}

