import styles from "./TemplateNode.module.css";

const onClick = (e) => {
  e.preventDefault()
  alert(`hello, world`)
}

const TemplateNode = (props) => {
  return (
    <div className={styles.node} onClick={onClick}>
      {props.children}
    </div>
  );
}

export default TemplateNode
