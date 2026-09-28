import { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({ value, onChange }) => {
  return (
    <div>
      find countries <input
              value={value}
              onChange={onChange}
            />
    </div>
  )
}

const Country = ({matches_len, name, capital, area, languages, flag}) => {
  if (matches_len === 1) {
    return (
      <div>
        <h1>{name}</h1>
        <p>Capital {capital}</p>
        <p>Area {area}</p>
        <h2>Languages</h2>
        <ul>
        {Object.entries(languages).map(([code, lang]) => (
           <li key={code}>{lang}</li>
         ))}
        </ul>
        <img src={flag} width={300}/>
      </div>
    )
  }
  return (
    <div>
      <p>{name}</p>
    </div>
  )
}

const Countries = ({ countries, newFilter }) => {
  const matches = countries.filter(
    country => country.name.common.toLowerCase().includes(newFilter.toLowerCase())
  )

  if (matches.length > 10) {
    if (newFilter.length === 0) {
      return null
    }
    return <p>Too many matches, specify another filter</p>
  }

  return (
    <>
      {matches
        .map((country) => (
          <Country
            matches_len={matches.length}
            name={country.name.common}
            capital={country.capital}
            area={country.area}
            languages={country.languages}
            flag={country.flags.svg}
          />
        ))}
    </>
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <Countries countries={countries} newFilter={newFilter}/>
    </div>
  )
}

export default App
