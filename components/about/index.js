import { PTag } from "../../lib/common"

export default function About({ name, birth_year, hair_color, height, mass, species }) {

  return (
    <div className='about my-4 p-4'>
      <h2 className="text-center text-3xl">Hi! &#x1F44B; My name is {name}!</h2>
      <h3 className="text-2xl mt-5 text-gray-300">In case you are wondering who I am...</h3>
      <PTag text={`I entered the universe in ${birth_year}`} />
      <PTag text={hair_color !== "n/a" && `My hair color is ${hair_color}`} />
      <PTag text={`I am ${height} centimeters tall and weight ${mass} kilograms`} />

      {species.map(singleSpecies => {
        return <div key={singleSpecies.name}>
          <h3 className="text-2xl mt-5 text-gray-300">I am a {singleSpecies.name}</h3>
          {singleSpecies.average_lifespan !== "indefinite" ?
            <div>
              <PTag text={`${singleSpecies.name}s speak the ${singleSpecies.language} language`} />
              <PTag text={`We are typically ${singleSpecies.average_height} centimeters tall`} />
            </div>
            :
            <p className="text-blue-200 mt-1">Which means I live forever!</p>
          }
        </div>
      })}
    </div>
  )
};