
import welcome  from  '../../assets/dinamia.png';

export const AboutMe = () => {
    return(
        <div>
            <h3 id="about-me">Nuestra Misión</h3>
            <div className="row py-5 mb-3">
                <div className="col-5 col-sm-10 col-md-5 col-lg-5">
                    <img src={welcome} className="rounded-circle mx-auto d-block mb-3 my-4" width="500" alt="welcome"></img>
                </div>
                <div className="col-sm-10 col-md-5 col-lg-5 my-5">
                    <p className='py-5 mx-3'>
                        Ofrecer cursos que trascienden el aprendizaje técnico de idiomas. Portugués,
                        español, inglés e italiano no son solo herramientas de comunicación; son puertas de
                        entrada a culturas ricas y diversas que merecen ser exploradas y comprendidas.
                        Además, entendemos que el idioma es solo una parte del éxito profesional.
                    </p>
                    <p className='mx-3'>
                        Por eso ofrecemos talleres de Inteligencia Cultural, diseñados para ayudar a nuestros estudiantes a adaptarse a entornos multiculturales con confianza y empatía.
                        También desarrollamos cursos enfocados en mejorar las habilidades personales y profesionales, esenciales en un mundo laboral competitivo.
                    </p>
                </div>
            </div>
        </div>
        )};
