import styles from './Menu.module.css'

const Menu = () => {
  const lanMenu = ['you', 'are', 'great']

  return (
    <div className={styles.MenuBox}>
      {
        lanMenu.map((lan) =>
          <div className={styles.MenuItem}>{lan}</div>
        )
      }
    </div>
  )
}

export default Menu
