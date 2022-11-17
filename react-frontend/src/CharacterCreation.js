import { useState, useEffect } from 'react'
import axios from 'axios'

function CharacterCreation({ user }){
    console.log(user)

    const [characters, setCharacters] = useState([])
    const [templates, setTemplates] = useState([])
    const [name, setName] = useState("")
    const [history, setHistory] = useState("")
    const [className, setClassName] = useState("Select A Class")


    useEffect(() => {
       axios.get("http://localhost:9292/characters")
            .then(resp => setCharacters(resp.data))

        axios.get("http://localhost:9292/templates/class_name")
            .then(resp => setTemplates(resp.data))
    }, [])

    const addNewCharacter = (newCharacter) => {
        setCharacters([...characters, newCharacter])
    }


    const handleForm = (e) => {
        e.preventDefault()
        axios.post("http://localhost:9292/characters", {
                name: name,
                history: history,
                user_id: user,
                class_name: className,
            })
            .then(resp => addNewCharacter(resp.data))

            setName("")
            setHistory("")
            setClassName("Select A Class")

    }

    const handleChange = (e) => {
        setClassName(e.target.value)
    }
    console.log(templates)
    
    const selectTemplate = templates.map(template => <option key={template.id}>{template}</option>)

    return(
        <div className='form-box'>
            <br/>
            <form onSubmit={handleForm}>
                <label>Create A New Character</label>
                <br/>
                <input
                    type="text"
                    name="name"
                    placeholder='Name of New Character'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <br/>
                <input
                    type='text'
                    name='history'
                    placeholder='Character Background History'
                    value={history}
                    onChange={e => setHistory(e.target.value)}
                />
                <br/>
                <select onChange={handleChange} value={className}>
                <option>{className}</option>
                {selectTemplate}
                </select>
                <br/>
                <button class="fancy-btn">Submit</button>
                </form>
        </div>
    )
}
export default CharacterCreation;