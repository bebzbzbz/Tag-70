import { useRef, useState } from 'react'
import './App.css'

type Account = {
  total: number,
  isMoreThanZero: boolean
}

function App() {
  const amountRef = useRef<HTMLInputElement>(null)

  const [account, setAccount] = useState<Account>({
    total: 0,
    isMoreThanZero: false
  })

  const handleAddMoney = () => {
    const amountToAdd = Number(amountRef.current?.value || 0)
    setAccount(prev => ({
      total: prev.total + amountToAdd,
      isMoreThanZero: prev.total + amountToAdd <= 0 ? false : true
    }))
  }
  const handleTakeMoney = () => {
    const amountToTake= Number(amountRef.current?.value || 0)
    setAccount(prev => ({
      total: prev.total - amountToTake,
      isMoreThanZero: prev.total + amountToTake <= 0 ? false : true
    }))
  }

  return (
    <>
      <div className='card'></div>
      <h1>SUPER BANK</h1>

      <div>
        <h2>Dein Girokonto</h2>
        <p>{account.total}</p>
        <input 
          type="number"
          ref={amountRef} />
        <div>
          <button onClick={handleAddMoney}>Einzahlen</button>
          <button onClick={handleTakeMoney}>Auszahlen</button>
        </div>
      </div>
    </>
  )
}

export default App
