import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons.js'

const Filter = ({ value, onChange }) => {
  return (
    <div>
      filter shown with: <input
              value={value}
              onChange={onChange}
            />
    </div>
  )
}

const Person = ({ name, number }) => {
  return (
    <p>{name} {number}</p>
  )
}

const Persons = ({ persons, newFilter }) => {
  return (
    <>
      {persons
        .filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
        .map((person) => (
          <Person key={person.id} name={person.name} number={person.number} />
        ))}
    </>
  )
}

const AddForm = ({ newName, newNumber, handlePersonChange, handleNumberChange, addPerson }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input
                value={newName}
                onChange={handlePersonChange}
              />
      </div>

      <div>
        number: <input
                  value={newNumber}
                  onChange={handleNumberChange}
                />
      </div>

      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState( [ { name: 'Arto Hellas', number: '040-1231244' } ] )
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })  
  }, [])

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name: newName,
      id: String(persons.length + 1),
      number: newNumber
    }

    personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
      })

    if (!persons.some((p) => p.name === newName)) {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } else {console.log(`${newName} is already added to phonebook`)}
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter value={newFilter} onChange={handleFilterChange} />

      <h2>Add a new</h2>
      <AddForm
        newName={newName}
        newNumber={newNumber}
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} />
    </div>
  )
}

export default App
