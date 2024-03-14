import { HashLink } from "react-router-hash-link"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import logo from '../../assets/logo.png';


export const Navbar = () => {
    return(  
        
        <nav id="navbar-main" className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
              <HashLink className="navbar-brand mx-3" to="/">
                <img src={logo} alt="dinamia-logo" width="50" height="50" className="d-inline-block align-text-top"/>
              </HashLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-pills me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <HashLink className="nav-link" to="#about-dinamia">Dinamia</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to="#about-me">Mi historia</HashLink>
                        </li>
                        <li>
                            <DropdownButton id="dropdown-main" href="#" title="Mis servicios">
                                <Dropdown.Item  href="#portuguese-foreigners">Portugues para extranjeros</Dropdown.Item>
                                <Dropdown.Item href="#spanish-foreigners">Español para extranjeros</Dropdown.Item>
                                <Dropdown.Item href="#cultural-inteligence">Inteligencia cultural</Dropdown.Item>
                                <Dropdown.Item href="#communicative-training">Entrenamiento comunicativo</Dropdown.Item>
                                <Dropdown.Item href="#personal-image">Imagen personal</Dropdown.Item>
                            </DropdownButton>
                        </li>
                        {/* <li className="nav-item">
                            <HashLink className="nav-link" to="#contact">Contacto</HashLink>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>)};