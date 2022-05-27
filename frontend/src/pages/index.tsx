import ReactFlowArea from '@/components/networkSimulator/ReactFlowArea';
import type { NextPage } from 'next'
import NetworkSimulator from '@/components/networkSimulator';

const Home: NextPage = () => {
  return (
    <div>
      <NetworkSimulator />
    </div>
  )
}

export default Home
