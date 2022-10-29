import '../main.css';

function Sidemenu() {
    let url = "";
    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3><img src="images/logo.jpg" width="200" height="70" className="d-inline-block align-top" alt=""/></h3>
                <strong>THI</strong>
            </div>

            <ul className="list-unstyled components">
                <li>
                    <a className="bi bi-file-plus-fill card-icon" href={url}>&nbsp;Become a host</a>
                </li>
                <li>
                    <a className="bi bi-building card-icon" href={url}>&nbsp;Reservations</a>
                </li>
                <li>
                    <a className="bi bi-search card-icon" href={url}>&nbsp;Properties</a>
                </li>
                <li>
                    <a className="bi bi-chat card-icon" href={url}>&nbsp;Reviews</a>
                </li>
            </ul>
        </nav>

    );
}

export default Sidemenu;