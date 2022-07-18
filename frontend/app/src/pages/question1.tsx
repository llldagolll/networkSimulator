import { Sidebar } from '@/components/Sidebar/Sidebar'
import Simulator from '@/components/Simulator/Simulator'
import { questionStatements } from '@/questionStatements'
import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import type { NextPage } from 'next'
import styles from './simulator.module.css'

const Question: NextPage = () => {
  return (
    <MantineProvider>
      <ModalsProvider>
        <div className={styles.networkSimulator}>
          <Simulator />
          <Sidebar question={questionStatements["question1"]} nextPage="/question2" />
        </div>
      </ModalsProvider>
    </MantineProvider>
  )
}


export default Question
