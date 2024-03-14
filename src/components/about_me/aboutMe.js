
import welcome  from  '../../assets/gabriela-welcome.png';

export const AboutMe = () => {
    return(  
        <div>
            <h3 id="about-me">Mi historia</h3>
            <div className="row py-5">
                <div className="col-5 col-sm-10 col-md-5 col-lg-5">
                    <img src={welcome} className="rounded-circle mx-auto d-block mb-3" alt="welcome"></img>
                </div>
                <div className="col-sm-10 col-md-5 col-lg-5">
                    <p className='py-5'>
                        Lorem enim pariatur laborum velit sint veniam aute excepteur nostrud. Esse aliquip duis enim duis sunt aliqua mollit. 
                        Enim consequat voluptate non consectetur in. Officia nulla magna ex commodo labore fugiat irure eiusmod. 
                        Eiusmod mollit nostrud anim sit nostrud quis reprehenderit deserunt aliquip irure enim.
                    </p>
                </div>
            </div>
        </div>
        )};