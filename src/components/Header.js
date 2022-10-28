import '../main.css';
function Header({ handleTextChange, filterText }) {
    let url = " ";


    return (
        <header>
            <nav className="navbar custommainnav navbar-inverse">

                <ul className="nav width100 justify-content-end ">
                    <li className="nav-item">
                        <a className="nav-link active top-nav-text" aria-current="page" href={url}><i
                            className="bi bi-star-fill"></i><span> Favourites</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link top-nav-text" href={url}><i className="bi bi-person-fill"></i><span> SignUp</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link top-nav-text" href={url}><i className="bi bi-box-arrow-in-right"></i><span> Login</span></a>
                    </li>
                </ul>

            </nav>

            <nav className="navbar customnav navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-header">
                        {/* <a className="navbar-brand" href={url}>
                        <img src="./images/logo.jpg" width="100" height="100" className="d-inline-block align-top" alt={url}>
                    </a> */}
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span><i className="bi bi-list navbar-toggle-color"></i></span>
                    </button>
                    <div className="collapse customdropdown navbar-collapse" id="navbarNavDropdown">
                        <div className="input-group justify-content-center">
                            <div className="form-outline">
                                <input type="search" id="form1" value={filterText} onChange={(e) => handleTextChange(e.target.value)} className="form-control" placeholder="Search for Property" />
                            </div>
                        </div>
                        <ul className="navbar-nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href={url}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={url}>Contact</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href={url} id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Country
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href={url}>India</a></li>
                                    <li><a className="dropdown-item" href={url}>United States</a></li>
                                    <li><a className="dropdown-item" href={url}>United Kingdom</a></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;