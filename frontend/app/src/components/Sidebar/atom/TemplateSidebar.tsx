import { genetarteQuery } from 'lib/generateQuery'
import styles from './TemplateSidebar.module.css'


export const TemplateSidebar = ({ children, sidebarStyle, onClick }) => {
  const submitAnswer = (e: React.MouseEvent) => {
    e.preventDefault()
    genetarteQuery(``)
  }
  return (
    <div className={styles.sidebar} style={sidebarStyle}>
      <button onClick={onClick} className={styles['close-sidebar']}>
        &times;
      </button>
      {children}
      <button className={styles.btn} onClick={submitAnswer}>回答</button>
    </div>

  )
}
