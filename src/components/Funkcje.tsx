function Funkcje() {
    return (
        <>
            <div>
            <div className="card">
                <div className="card-header">
                    Funkcje
                </div>
            <div className="row">
                <div className="col-4">
                    <div id="list-example" className="list-group">
                        <a className="list-group-item list-group-item-action" href="#list-item-1">AntyLink</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-2">Minigry</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-3">Moderacja</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-4">Tickety</a>
                    </div>
                </div>
                <div className="col-8">
                    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex={0}>
                        <h4 id="list-item-1">Antylink</h4>
                        <p>System AntyLink pozwala na chronienie swojego serwera przed reklamowaniem innych serwerów. By go uruchomić należy wpisać komende "/anti-link setup".</p>
                        <h4 id="list-item-2">Minigry</h4>
                        <p>Minigry uniemożliwiają nudzenie się na serwerze! Na pewno znajdziesz jakąś dla siebie! (Pamiętaj że zawsze możesz zasugerować nową!)</p>
                        <h4 id="list-item-3">Moderacja</h4>
                        <p>Bot posiada także komendy moderacyjne (ban, kick itp) które pozwalają ci nadawać kary na osoby które łamią twój regulamin!</p>
                        <h4 id="list-item-4">Tickety</h4>
                        <p>System ticketów pozwala na komunikacje członka serwera z administracją w sposób prywatny!</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Funkcje;