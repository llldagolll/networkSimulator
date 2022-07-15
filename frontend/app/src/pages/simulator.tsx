import { Sidebar } from '@/components/Sidebar/Sidebar'
import Simulator from '@/components/Simulator/Simulator'
import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import type { NextPage } from 'next'
import styles from './simulator.module.css'

const QuestionOne: NextPage = () => {
  return (
    <MantineProvider>
      <ModalsProvider>
        <div className={styles.networkSimulator}>
          <Simulator />
          <Sidebar />
        </div>
      </ModalsProvider>
    </MantineProvider>
  )
}


export default QuestionOne
