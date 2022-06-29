import Sidebar from '@/components/Sidebar/Sidebar'
import Simulator from '@/components/Simulator/Simulator'
import type { NextPage } from 'next'
import styles from './index.module.css'

const QuestionOne: NextPage = () => {
  return (
    <div className={styles.networkSimulator}>
      <Simulator />
      <Sidebar />
    </div>
  )
}


export default QuestionOne
