import atikli from "./artikli.json";
import logo from "./img/logo.png"

function Zaglavlje() {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand">
                        <img src={logo}/>
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Zaglavlje;