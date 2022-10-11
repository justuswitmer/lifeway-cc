import Header from "../components/header";
import Search from '../components/search';
import About from '../components/about';

import { fetchAPI } from '../lib/api';
import Image from 'next/image';
import starWarsGif from "../public/assets/starwarsGif.gif";
import { useState } from 'react';
import Films from '../components/films';
import Starships from '../components/starships';

export default function Home() {

  const [characters, setCharacters] = useState([]);
  const [noCharacters, setNoCharacters] = useState(false);
  const [characterName, setCharacterName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchForCharacter = async (item) => {
    setIsLoading(true);
    const charactersRes = (await fetchAPI(`https://swapi.dev/api/people?search=${item}`)) || []
    let charactersPayload = [];

    // loop through characters returned
    for (let a = 0; a < charactersRes.results.length; a++) {
      let character = charactersRes.results[a];
      let species = [];
      let starships = [];
      let films = [];

      // loop through species of each character
      // fetch data for each species and push into array
      for (let e = 0; e < character.species.length; e++) {
        let singleSpecies = character.species[e];

        const speciesDetail = (await fetchAPI(singleSpecies)) || [];
        species.push(speciesDetail);
      }

      // loop through starships of each character
      // fetch data for each starship and push into array
      for (let i = 0; i < character.starships.length; i++) {
        let starship = character.starships[i];
        const starshipDetails = (await fetchAPI(starship)) || [];
        starships.push(starshipDetails);
      }

      // loop through films of each character
      // fetch data for each film and push into array
      for (let o = 0; o < character.films.length; o++) {
        let film = character.films[o];
        const filmDetails = (await fetchAPI(film)) || [];
        films.push(filmDetails);
      }

      charactersPayload.push({
        name: character.name,
        birth_year: character.birth_year,
        hair_color: character.hair_color,
        height: character.height,
        mass: character.mass,
        speciesInfo: species,
        starshipInfo: starships,
        filmsInfo: films
      });
    }

    setIsLoading(false);
    charactersRes.results.length === 0 ? setNoCharacters(true) : setNoCharacters(false);
    setCharacterName(item);
    console.log(charactersPayload)
    return setCharacters(charactersPayload);
  };

  return (
    <div className='bg-black text-yellow-300 flex min-h-screen justify-center'>
      <div className='w-3/4'>
        <Header />
        <Search findCharacter={searchForCharacter} />
        {isLoading ?
          <div className='flex justify-center my-10'>
            <Image
              src={starWarsGif}
              width={600}
              height={400}
            />
          </div>
          :
          noCharacters ?
            <div><p>No character found with the name {characterName}</p></div>
            :
            <div className='bg-black'>
              <div>
                {characters.map((characters) => (
                  <div key={characters.name} className="my-10 px-10 border-solid border-2 border-red-500">
                    <About
                      name={characters.name}
                      birth_year={characters.birth_year}
                      hair_color={characters.hair_color}
                      height={characters.height}
                      mass={characters.mass}
                      species={characters.speciesInfo}
                    />
                    <div className='flex justify-between'>
                      <Films
                        films={characters.filmsInfo}
                      />
                      {characters.starshipInfo.length > 0 &&
                        <Starships
                          starships={characters.starshipInfo}
                        />
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
        }
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const characters = (await fetchAPI("people")) || []
//   return {
//     props: { characters },
//   }
// }
