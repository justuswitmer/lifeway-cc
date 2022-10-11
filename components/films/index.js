import Modal from "../../lib/modal"

export default function Films({ films }) {

  return (
    <div className='about my-4 px-4'>
      <h3 className="text-2xl mt-5 text-gray-300">I've been in some films!</h3>
      <h4 className="text-1xl mt-1 mb-4 text-gray-300 italic">(Click on one to read a preview)</h4>
      {films.map(film => {
        return <div key={film.id}>
          <Modal film={film} />
        </div>
      })}
    </div>
  )
};