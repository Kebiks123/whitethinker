const admList = ["minekcow", "NotPiotrekDev", "Maciekx1", "Kifuś."]

function admUser(id : Number) {
    if (id === 1) {
        return {
            user: "minekcow",
            rangi: "zalozyciel+programista",
        }
    } else if (id === 2) {
        return {
            user: "notpiotrekdev",
            rangi: "cozalozyciel+programista",
        }
    } else if (id === 3) {
        return {
            user: "maciekx1",
            rangi: "administrator",
        }
    } else if (id === 4) {
        return {
            user: "kifus.",
            rangi: "administrator",
        }
    }
}
function Adm() {
    return (
        <div className="card">
            <div className="card-header">
                Spis administracji
            </div>
            <div className="card-body">
                <p className="card-text">Już niedługo...</p>
            </div>
        </div>
    )
}

export default Adm;