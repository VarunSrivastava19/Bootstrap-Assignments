const Header = () => {
    return (
        <div className="nav navbar navbar-expand-sm navbar-dark">
            <a className="navbar-brand" href="#">Quiz App</a>
            
            <ul className="nav navbar-nav justify-content-between ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <span className="">
                            Login
                        </span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <span className="">
                            Sign Up
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Header;