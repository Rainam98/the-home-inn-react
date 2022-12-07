import '../main.css';

function Sidemenu() {
    let url = "";
    const isHost = localStorage.getItem("isHost");
    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3><img src="images/logo.jpg" width="200" height="70" className="d-inline-block align-top" alt="" /></h3>
                {/* <strong>THI</strong> */}
                <strong><img src="images/logo2.jpg" width="50" height="60" className="d-inline-block align-top" alt="" /></strong>
            </div>

            <ul className="list-unstyled components">
                {(isHost) === 'true'
                    ? <li>
                        <a className="bi bi-file-plus-fill card-icon" href={url}>&nbsp;Add a Property</a>
                    </li>
                    : <li>
                        <a className="bi bi-file-plus-fill card-icon" href="/host">&nbsp;Become a host</a>
                    </li>}

                {(isHost) === 'true'
                    ? <li>
                        <a className="bi bi-gear card-icon" href={url}>&nbsp;My Properties</a>
                    </li>
                    : null
                }

                <li>
                    <a className="bi bi-building card-icon" href={url}>&nbsp;Reservations</a>
                </li>
                <li>
                    <a className="bi bi-star card-icon" href={url}>&nbsp;Favorites</a>
                </li>
                {/* <li>
                    <a className="bi bi-chat card-icon" href={url}>&nbsp;Reviews</a>
                </li> */}
            </ul>
        </nav>

    );
}

export default Sidemenu;