
import welcome  from  '../../assets/gabriela-welcome.png';

export const AboutMe = () => {
    return(  
        <div>
            <h3 id="about-me">Sobre mi</h3>
            <div className="row py-5">
                <div className="col-5 col-sm-10 col-md-5 col-lg-5">
                    <img src={welcome} className="rounded-circle mx-auto d-block mb-3" alt="welcome"></img>
                </div>
                <div className="col-sm-10 col-md-5 col-lg-5">
                    <p className='py-5'>
                        Soy Gabriela Hidalgo y desde Dinamia te acompaño para que potencies y hagas crecer tu comunicación en Español y en Portugués.
                        Como docente y facilitadora, mi pasión radica en compartir el fascinante mundo
                        de los idiomas y las culturas, brindando las herramientas necesarias para explorar, comunicarse y comprender las sutilezas culturales que nos hacen diferentes. 
                        Quiero despertar la curiosidad y el entusiasmo en este viaje donde cada encuentro es una oportunidad para crecer, aprender, descubrir y conectar con los otros de una manera completamente nueva."
                    </p>
                </div>
            </div>
        </div>
        )};