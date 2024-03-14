import { HashLink } from "react-router-hash-link"
import { IconContext } from "react-icons"
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CgMail } from "react-icons/cg";

export const Footer = () => {
    return(  
        
            <footer>
                <div class="container">
                    <div class="row py-5 justify-content-md-center">
                        <div class="row">  
                            <div class="col d-flex justify-content-center pb-4">
                            <IconContext.Provider value={{color: '#693131', size: 42}}>
                                <HashLink to="https://www.instagram.com/dinamia_" target='_blank'><CiInstagram className="mx-2"/></HashLink>
                                <HashLink to="https://www.linkedin.com/in/gabriela-a-hidalgo" target='_blank'><CiLinkedin className="mx-2"/></HashLink>
                                <HashLink to="https://api.whatsapp.com/send?phone=+5491166480421" target='_blank'><FaWhatsapp className="mx-2"/></HashLink>
                                <HashLink to="mailto:gah.asesoria@gmail.com"><CgMail className="mx-2"/></HashLink>
                            </IconContext.Provider>
                            </div>
                        </div>
                    <div class="row">
                        <div class="col d-flex justify-content-center">
                            <p>(c) {(new Date().getFullYear())} Dinamia. Todos los derechos reservados.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>)};