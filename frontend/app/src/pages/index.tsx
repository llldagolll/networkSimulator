import Sidebar from '@/components/Sidebar/Sidebar'
import Simulator from '@/components/Simulator/Simulator'
import type { NextPage } from 'next'
import styles from './index.module.css'

const QuestionOne: NextPage = () => {
  fetch('http://localhost:5000')
    .then(res => console.log(res)
    )
  return (
    <div className={styles.networkSimulator}>
      <Simulator />
      <Sidebar />
    </div>
  )
}


export default QuestionOne
