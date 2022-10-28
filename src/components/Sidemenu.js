import '../main.css';

function Sidemenu() {
    let url = "";
    return (
        <div>
            <div className="sidebar">
                <a className="bi bi-file-plus-fill card-icon active" href={url}> Become a host</a>
                <a className="bi bi-building card-icon" href={url}> Reservations</a>
                <a className="bi bi-search card-icon" href={url}> Properties</a>
                <a className="bi bi-chat card-icon" href={url}> Reviews</a>
            </div>

        </div>

    );
}

export default Sidemenu;