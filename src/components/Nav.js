import {Link} from "react-router-dom";
import Logo from "../images/logo.png"

const Nav = () => {

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-transparent'>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} className={'img-fluid'}
                         style={{
                             width: '70px',
                             height: '70px'
                         }}
                         alt={'Logo'}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="btn btn-main" to="/">Articles</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Nav