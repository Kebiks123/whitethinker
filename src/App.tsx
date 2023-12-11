import NavBar from "./components/NavBar";
import WelcomeMsg from "./components/WelcomeMsg";
import BetaWarn from "./components/BetaWarn";
import Funkcje from "./components/Funkcje";
import Adm from "./components/Adm";
import CopyRight from "./components/CopyRight";
function App() {
    return (
        <div>
            <NavBar />
            <br/><br/><br/><br/>
            <div style={{width: 525, margin: "auto"}}>
                <BetaWarn/>
                <br/><br/><br/>
                <WelcomeMsg/>
                <br/><br/><br/>
                <Funkcje/>
                <br/><br/><br/>
                <Adm/>
            </div>
            <br/><br/><br/><br/>
            <CopyRight/>

        </div>
    )
}

export default App