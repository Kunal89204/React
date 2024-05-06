import React from 'react'

const App = () => {
  console.log()
  return (
    <div>
      hello world
      {import.meta.env.VITE_APPWRITE_URL}
    </div>
  )
}

export default App
