import { PTag } from "../../lib/common"

export default function Starships({ starships }) {

  return (
    <div className='about my-4 px-4'>
      <h3 className="text-2xl mt-5 text-gray-300">Take a look at what I have flown!</h3>
      {starships.map(starship => {
        return <div key={starship.id}>
          <PTag text={starship.model} />
          <p className="text-gray-300 text-sm pl-5">Max speed: {starship.max_atmosphering_speed} kph</p>
          <p className="text-gray-300 text-sm pl-5">Price tag: {Number(starship.cost_in_credits)} credits</p>
          <p className="text-gray-300 text-sm pl-5">Length: {Number(starship.length)} meters</p>
        </div>
      })}
    </div>
  )
};