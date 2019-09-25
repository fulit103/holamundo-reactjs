import React from 'react'

const HolaMundo = () => {
  const Hello = '!Hola mundo'
  const isTrue = false
  return (
    <div className="HolaMundo">
      <h1>{Hello}</h1>
      <h2>Curso basico react</h2>
      <img src="https://cdn.auth0.com/blog/react-js/react.png" alt="React" />
      {isTrue ? <h4>Esto es verdadero</h4> : <h5>Soy Falso</h5>}
      {isTrue && <h4>Soy verdadero</h4>}
    </div>
  )
}

export default HolaMundo