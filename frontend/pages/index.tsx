import type { NextPage } from 'next'
import { DndFlow } from "../components/Flow/DnDFlow";

const Home: NextPage = () => {
  return (
    <div style={{ height: 500 }}>
      <DndFlow />
    </div>
  )
}

export default Home

