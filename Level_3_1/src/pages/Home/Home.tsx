import { useState } from "react"
import Header from "../components/Header/Header"
import Bank from "../components/Bank/Bank"

export type Account = {
    total: number,
    isMoreThanZero: boolean
}

const Home = () => {
    const [account, setAccount] = useState<Account>({
        total: 0,
        isMoreThanZero: false
    })

    return (  
        <>
            <Header isMoreThanZero={account.isMoreThanZero}/>
            <Bank account={account} setAccount={setAccount}/>
        </>
    );
}

export default Home;