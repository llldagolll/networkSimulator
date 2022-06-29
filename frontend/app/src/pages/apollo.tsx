import { genetarteQuery } from "lib/generateQuery"
import { useState } from "react"

const query = `
  nodes {
    data {
      id
      type
      label
    }
  }
`

const Home = () => {
  const [res, setRes] = useState(null)

  const callApi = async () => {
    const data = await genetarteQuery(query)
    setRes(JSON.stringify(data))
  }

  return (
    <div>
      <button onClick={() => callApi()}>
        Click me!
      </button>
      <p>{res}</p>
    </div>
  )
}


export default Home;


