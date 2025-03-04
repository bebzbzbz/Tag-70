import './Header.css'

type HeaderProps = {
    isMoreThanZero: boolean
}

const Header = ({isMoreThanZero} : HeaderProps) => {
    return (
        <header>
            <div className={`card ${isMoreThanZero ? "happy" : "sad"}`}>
                <div className='stripe'></div>
                {isMoreThanZero ? <span>:-)</span> : <span>:-(</span>}
            </div>
            <h1>SUPER BANK</h1>
        </header>
    );
}

export default Header;