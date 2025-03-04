import { useState } from 'react'
import './App.css'
import Form from './pages/Form/Form'

export type NameDate = {
  name: string,
  date: string
}

function App() {
  const [nameDate, setNameDate] = useState<NameDate>({
    name: "",
    date: ""
  })

  return (
    <Form nameDate={nameDate} setNameDate={setNameDate}/>
  )
}

export default App
