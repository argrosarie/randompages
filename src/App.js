import React, { useState } from 'react'

function App() {
  const [randomData, setRandomData] = useState(null)

  const getRandomData = async () => {
    try {
      const response = await fetch('/data.json') // Ruta relativa al archivo JSON
      if (!response.ok) {
        throw new Error('No se pudo cargar el archivo JSON.')
      }
      const data = await response.json()
      const randomIndex = Math.floor(Math.random() * data.length)
      setRandomData(data[randomIndex])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <h1>Mostrar Datos Aleatorios</h1>
      <button onClick={getRandomData}>Mostrar dato aleatorio</button>
      {randomData && (
        <div>
          <h2>{randomData.page}</h2>
          <p>{randomData.description}</p>
        </div>
      )}
    </div>
  )
}

export default App
