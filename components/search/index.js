import { useState } from "react"

export default function Search({ findCharacter }) {

  const [character, setCharacter] = useState("");

  const getCharacter = () => {
    findCharacter(character);
  }

  return (
    <div className="">
      <p className="text-center text-3xl mb-3">Search for any Star Wars character</p>
      <div className="w-full flex border-cyan-400 border-2">
        <input className="p-2 text-white bg-black w-9/12 focus-visible:outline-none" type="text" onChange={(val) => setCharacter(val.target.value)} />
        <button className="text-black text-xl w-3/12 bg-cyan-400 hover:bg-cyan-200" onClick={() => getCharacter()}>Search</button>
      </div>
    </div>
  )
};