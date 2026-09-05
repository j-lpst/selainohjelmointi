const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

// pitää alkaa isolla kirjaimella
//const Footer = () => {
const Footer = () => {
  return (
    <div>
      greeting app created by
      <a href="https://github.com/mluukkai"> mluukkai</a>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  const nimi = 'Petteri'
  const ika = 30

  const friends = [
    { name: 'Raine', age: 36 },
    { name: 'Marko', age: 41 },
  ]
  const moreFriends = [ 'Pasi', 'Juha' ]

  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello name="Ilpo" age={36 + 7} />
      <Hello name={nimi} age={ika}/>

      {/* Tämä ei toimi */}
      {/* <p>{friends[0]}</p> */}
      {/* <p>{friends[1]}</p> */}
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{moreFriends}</p>

      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>

      <Footer />

    </div>
  )
}

export default App
