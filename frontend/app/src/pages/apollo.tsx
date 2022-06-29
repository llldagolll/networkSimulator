import { gql } from "@apollo/client"
import client from '../../lib/apolloClient'


export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query pets {
        id
        name
      }
    `,
  });

  return {
    props: {
      pets: data.pets.slice(0, 1),
    },
  };
}



const Home = ({ pets }) => {
  console.log(pets);

  return (
    <div>
      {pets.map(pet => (
        <div key={pet.id}>
          <h3>
            {pet.id}
          </h3>
          <p>
            {pet.name}
          </p>
        </div>
      ))}
    </div>
  )
}


export default Home;


