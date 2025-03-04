import { useRef } from "react"
import { Account } from "../../Home/Home"
import './Bank.css'

type BankProps = {
    account: Account,
    setAccount: React.Dispatch<React.SetStateAction<Account>>
}

const Bank = ({account, setAccount} : BankProps) => {
    const amountRef = useRef<HTMLInputElement>(null)

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
        <div className="bank">
            <h2>Dein Girokonto</h2>
            <p>{account.total}€</p>
            <input 
                type="number"
                ref={amountRef} />
            <div className="buttons">
                <button onClick={handleAddMoney}>Einzahlen</button>
                <button onClick={handleTakeMoney}>Auszahlen</button>
            </div>
        </div>
    );
}

export default Bank;