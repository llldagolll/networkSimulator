const SidebarPloblemStatement = ({ question }) => {

  return (
    <>
      <h2>{question["title"]}</h2>
      <p>次の条件を満たす構成図を作成してください</p>
      <ul>
        {
          question["statements"].map((statement, i) => <li key={i}>{statement}</li>)
        }
      </ul>
    </>

  )
};

export default SidebarPloblemStatement;
