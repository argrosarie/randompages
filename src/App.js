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
    <div className="px-4 py-8 grid place-content-center bg-gray-950 min-h-screen ">
      <section className="flex flex-col items-center space-y-4">
        <button
          className="w-40 bg-gray-500 py-4 px-8 rounded text-gray-300 font-bold uppercase text-center"
          onClick={getRandomData}
        >
          Cúcu
        </button>
        {randomData && (
          <div className="flex flex-col items-center text-center text-gray-500 text-2xl">
            <p>{randomData.description}</p>
            <h2>{randomData.page}</h2>
          </div>
        )}
      </section>
    </div>
  )
}

export default App
