import { useRef, useState } from 'react'
import './App.css'

const today = new Date().toISOString()
const todayMonthDay = today.slice(5, 10)

export type NameDate = {
  name: string,
  date: string
}

function App() {
  const [nameDate, setNameDate] = useState<NameDate>({
    name: "",
    date: ""
  })

  const [loading, setLoading] = useState(false)

  const nameRef = useRef<HTMLInputElement>(null)
  const dateRef = useRef<HTMLInputElement>(null)

  const checkDateFunction = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setNameDate({
          name: nameRef.current?.value || "",
          date: dateRef.current?.value || ""
      })
      setLoading(true)
  }

  if(loading) {
    nameDate.date.slice(5,10) === todayMonthDay ? window.alert(`Happy birthday, ${nameDate.name}`) : window.alert("Not today");
  }

  return (
    <form onSubmit={checkDateFunction}>
      <div>
          <label htmlFor="name">Vorname</label>
          <input 
          id='name' 
          type="text" 
          ref={nameRef}/>
      </div>
      <div>
          <label htmlFor="date">Geburtstag</label>
          <input 
          type="date" 
          id="date" 
          ref={dateRef}/>
      </div>
      <button type='submit'>Habe ich heute Geburtstag?</button>
  </form>
  )
}

export default App
