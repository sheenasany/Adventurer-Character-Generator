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

    const fetchingUserCharacters = (user) => {axios.get(`http://localhost:9292/users/${user}/characters`).then(resp => setCharacters(resp.data))}

    function handleClick(e){
       if(e.target.value === "creation"){
        setUserRoute(true)
       }
       else {
        setUserRoute(false)
       }
    }

    // function handleSelectCharClick () {
    //     setSelectCharBtn()
    // }

    // function handleCreateCharClick () {
    // }

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }

    let userList = users.map(user => <option value={user.id} key={user.id}>{user.name}</option>)

    function handleRendering(){
        if(userRoute === true && user !== ""){
          return <CharacterCreation user={user}/>
        }
        if(userRoute=== false && characters !== null){
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

        {userRoute ? <h2>Hark! Create Thy Champion!</h2>: <h2>Adventurer! Choose Your Character!</h2>}
        {userRoute ? <h5>Select your username. Enter a character name and background, and your character will be auto-generated!</h5>: <h5>View your created characters in all their resplendent glory with stats. Click on your character to delete or update them.</h5> }
           {/* <button class="fancy-btn" onClick={handleClick}>{userRoute ?  "Switch to Character Selection" : "Change to Character Creation"}</button> */}
        <button class="fancy-btn" value="creation" onClick={handleClick}>Character Creation</button>
        <button class="fancy-btn" value="selection" onClick={handleClick}>Character Selection</button>
        <br/>

           <select onChange={handleChange}>
            <br/>
           <option>Select User</option>
           {userList}
           </select>
           {/* {userRoute ? user !== "" ? <CharacterCreation user={user}/> : null : characters === null ? null : <CharacterList user={user} characters={characters}/>} */}
        {handleRendering()} 
        </div>
    )
}


export default User;