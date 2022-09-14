import {useEffect, useState} from "react";
import Har from "./Char";


function Characters() {

    let [chars, setChars] = useState([]);

  useEffect( () => {fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(res => {
          console.log(res)
          setChars(res.results);
      })
      },[])
    return (
        <div className='rickMorty'>
            {chars.map((char, index) => (<Har name={char.name}
                                              id={char.id}
                                              status={char.status}
                                              species={char.species}
                                              gender={char.gender}
                                              image={char.image}
                                              key={index}/>))}
        </div>

    )
}

export default Characters;