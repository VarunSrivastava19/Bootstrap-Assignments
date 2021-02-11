import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="nav navbar navbar-expand-sm navbar-dark">
            <Link className="navbar-brand" to="/">Quiz App</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to='/redux'>Redux</Link></li>
                </ul>
                <ul className="navbar-nav justify-content-right ml-auto">
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
        </div>
    )
}

export default Header;