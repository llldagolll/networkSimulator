import { gql } from "@apollo/client"
import client from "./apolloClient"

export const genetarteQuery = async (query: string): Promise<Object> => {
  const { data } = await client.query({
    query: gql`{${query}}`
  })
  return data
}
