import type { NextPage } from 'next'
import { DndFlow } from "../components/Flow/DnDFlow";

const Home: NextPage = () => {
  return (
    <div style={{ height: 500 }}>
      <DndFlow />
      <p>Hell, world</p>
    </div>
  )
}

export default Home

