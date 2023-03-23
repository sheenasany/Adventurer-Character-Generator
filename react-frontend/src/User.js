import React, { useState } from "react";
import axios from 'axios'
import CharacterCreation from "./CharacterCreation";
import CharacterList from "./CharacterList";


function User({ users, handleUsers }){
    const [userRoute, setUserRoute] = useState(true)
    const [user, setUser] = useState("")
    const [characters, setCharacters] = useState([])
    const [userName, setUserName] = useState("")


    function activate (e) {
        e.preventDefault()
        axios.post('http://localhost:9292//users', {name: userName}).then(resp => handleUsers([...users, resp.data]))

        setUserName('')
        }

    const handleChange = (e) => {
        setUser(e.target.value)
        fetchingUserCharacters(e.target.value)  
    }

    const fetchingUserCharacters = (user) => {
        axios.get(`http://localhost:9292/users/${user}/characters`).then(resp => setCharacters(resp.data))
    }

    // added a value to each button to register the event and reset the value of userRoute on a click
    const handleClick = (e) => {
    if(e.target.value === "creation"){
        setUserRoute(true)
    }
    else{
        setUserRoute(false)
        }
    }

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }

    let userList = users.map(user => <option value={user.id} key={user.id}>{user.name}</option>)

    // handles the rendering of each component depending on the state of userRoute 
    // && whether there is a user clicked or whether a character is fetched properly
    const handleRendering = () => {
        if(userRoute === true && user !== ""){
            return <CharacterCreation user={user}/>
        }
        if(userRoute === false && characters !== null){
            return <CharacterList user={user} characters={characters}/>
        }
    }

    return(
        <div>
            <form action="/action_page.php" onSubmit = {activate}>
                <label htmlFor="name">Username:</label><br/>
                <input type="text" id="name" name="name" onChange={handleUserName} value={userName}/><br/>
                <input class="fancy-btn" type="submit" value="Submit"/>
            </form>

        {userRoute ? 
            <div>
                <h2>Hark! Create Thy Champion!</h2>
                <h5>Select your username. Enter a character name and background, and your character will be auto-generated!</h5>
            </div>
        : 
            <div>
                <h2>Adventurer! Choose Your Character!</h2>
                <h5>View your created characters in all their resplendent glory with stats. Click on your character to delete or update them.</h5>
            </div>}
            
        {/* {userRoute ? <h5>Select your username. Enter a character name and background, and your character will be auto-generated!</h5>: <h5>View your created characters in all their resplendent glory with stats. Click on your character to delete or update them.</h5> } */}
        <button class="fancy-btn" value="creation" onClick={handleClick}>Character Creation</button>
        <button class="fancy-btn" value="selection" onClick={handleClick}>Character Selection</button>
        <br/>

        <select onChange={handleChange}>
        <br/>
        <option>Select User</option>
            {userList}
        </select>
            {/* Leaving this here for you to say goodbye, Quade..*/}
            {/* {userRoute ? user !== "" ? <CharacterCreation user={user}/> : null : characters === null ? null : <CharacterList user={user} characters={characters}/>} */}
        {handleRendering()} 
        </div>
    )
}

export default User;