const SidebarPloblemStatement = ({ question }: { question: string[] }) => {

  return (
    <>
      <p>次の条件を満たす構成図を作成してください</p>
      <ul>
        {
          question.map((statement, i) => <li key={i}>{statement}</li>)
        }
      </ul>
    </>

  )
};

export default SidebarPloblemStatement;
