import React from "react";
import { BrowserRouter as Router } from "react-router-dom"
import { GlobalStyles } from "./components/themes/GlobalStyles";
import { Navbar } from "./components/navbar/navbar";
import { AboutMe } from "./components/about_me/aboutMe";
import { Footer } from "./components/footer/footer";
import { AboutDinamia } from "./components/about_dinamia/aboutDinamia";
import { MyServices } from "./components/my_services/myServices";
// import { Contact } from "./components/contact/contact";
import { ArrowTop } from "./components/arrow_to_top/arrowTop"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

function App() {
  return (
    <div>
      <GlobalStyles/>
        <Router>
          <Navbar/>
            <div className="container pt-3">
              <div className="row py-5">
                <div class="col-sm">
                  <AboutDinamia/>
                </div>
              </div>
              <div className="row py-5">
                <div class="col-sm">
                  <AboutMe/>
                </div>
              </div>
              <div className="row py-5">
                <div class="col-sm">
                  <MyServices/>
                </div>
              </div>
              {/* <div className="row py-5">
                <div class="col-sm">
                  <Contact/>
                </div>
              </div> */}
              <div className="row">
                <div class="col-sm offset-md-5">
                  <ArrowTop/>
                </div>
              </div>
            </div>
            <Footer/>
        </Router>
    </div>
  )
}

export default App;
