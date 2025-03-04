import { useRef, useState } from "react"
import { NameDate } from "../../App"

const today = new Date().toISOString()
const todayMonthDay = today.slice(5, 10)

type FormProps = {
    nameDate: NameDate;
    setNameDate: (nameDate: NameDate) => void
}

const Form = ({nameDate, setNameDate} : FormProps) => {
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

    const [loading, setLoading] = useState(false)


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
    );
}

export default Form;