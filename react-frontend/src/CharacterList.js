import CharacterCard from "./CharacterCard"
import { useState } from 'react'

function CharacterList({ characters }) {
  const [selectedCharacter, setSelectedCharacter] = useState({})
  const [selectedCharacterState, setSelectedCharacterState] = useState(false)
  // const [currentUser, setCurrentUser] = useState()
  
  const characterCard = characters.map(character => 
      <button class="fancy-btn" onClick={() => handleSelectedCharacter(character)} key={character.id}>{character.name}</button>)

  const handleSelectedCharacter = (character) => {
    setSelectedCharacter(character)
    setSelectedCharacterState(!selectedCharacterState)
  }
  
  return(
    <div>
      {characterCard}
      {selectedCharacterState ? <CharacterCard selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter}/> : null}
    </div>
    )
  }

export default CharacterList;