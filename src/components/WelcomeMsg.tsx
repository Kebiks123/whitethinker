function WelcomeMsg() {
    return (
        <div className="card" id={"gora"}>
            <h5 className="card-header">Witaj!</h5>
            <div className="card-body">
                <h5 className="card-title">O nas</h5>
                <p className="card-text">
                    Jesteśmy grupką osób która chce pomóc rozwijać się serwerom discord. W tym unikać ataków botów lub spamu linkami discord itp. Jeśli chcesz zaprosić bota, kliknij w guzik!
                </p>
                <a href="https://discord.com/api/oauth2/authorize?client_id=1165356162032599040&permissions=8&scope=applications.commands%20bot" className="btn btn-primary">Zaproś bota</a>
            </div>
        </div>
    );
}

export default WelcomeMsg;