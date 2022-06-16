import styles from "./Template.module.css";

//TODO: ノードフォームが完成次第これを埋めて、適応する
interface modal {
  show: boolean,
  onClick: (e) => void,
  content: any,
}

export const TemplateModal = ({ onClick, content }: modal) => {
  return (
    <div className={styles['modal-content']} >
      <p>{content}</p>
      <br />
      <button className={styles['modal-button']} onClick={onClick}>Close</button>
    </div >
  )
}
