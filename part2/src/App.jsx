import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([ { name: 'Arto Hellas', number: '040-1231244' } ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name: newName,
      id: String(persons.length + 1),
      number: newNumber
    }

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
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>

        <div>
          filter shown with: <input
                  value={newFilter}
                  onChange={handleFilterChange}
                />
        </div>

      <h2>Add a new</h2>
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
      <h2>Numbers</h2>
        {persons
          .filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
          .map((person) => (
            <p key={person.id}>{person.name} {person.number}</p>
          ))}
    </div>
  )

}

export default App
