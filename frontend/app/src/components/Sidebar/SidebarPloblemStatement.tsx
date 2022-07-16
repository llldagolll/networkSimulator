
 const questionStatements = {
    question1: [
    "クライアントからhttp接続でリクエストを受け取って、レスポンスを返す",
    "web三層構造をなしている",
  ],
  }



const SidebarPloblemStatement = ({question}: {question: string}) => {
  // const statements = setQuestionStatements(question)

  return (
    <>
      <p>次の条件を満たす構成図を作成してください</p>
       <ul>
       {
         questionStatements["question1"].map((statement, i) => <li key={i}>{statement}</li>)
       }
       {/*   { */}
       {/*   questionStatements[statements].map(statement => <li>{statement}</li>) */}
       {/* } */}
       </ul>
    </>

  )
};

export default SidebarPloblemStatement;
