import styles from './TemplateSidebar.module.css'


export const TemplateSidebar = ({ children, sidebarStyle, onClick }) => {
  return (
    <div className={styles.sidebar} style={sidebarStyle}>
      <button onClick={onClick} className={styles['close-sidebar']}>
        &times;
      </button>
      {children}
    </div>

  )
}
