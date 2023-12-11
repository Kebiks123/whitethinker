
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">WhiteThinker</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="vr"></div>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#gora">Strona główna</a>
                        <a className="nav-link" href="#funkcje">Funkcje</a>
                        <a className="nav-link disabled" href="#cennik">Cennik</a>
                        <a className="nav-link" href="https://discord.gg/PFUgn2eNqM">Support</a>
                        <div className="vr float-end"></div>
                        <a className="nav-link float-end">34 serwery</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar