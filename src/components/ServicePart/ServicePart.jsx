import "./ServicePart.scss"
import {useNavigate} from "react-router-dom";

export default function ServicePart() {
   let navigate = useNavigate()
   return (
      <>
         <div className="ServicePartContainer">
            <div className="ServicePartContainer2">
               <h1 className="SPC_Title">Our Service</h1>

               <div className="SPC_ServiceList">
                  <div className="SPCSL_innerContainer">
                     {/*-----------------------------------------------------*/}
                     <div className="SPCS_Service">
                        <h2 className="SPCSS_icon"><i className="fa-solid fa-tv"></i></h2>
                        <h3 className="SPCSS_Title">Web Development</h3>
                        <p className="SPCSS_Text">
                           Using cloud services and Lean, Modular design we will develop for you a full Web Application.
                        </p>
                        <ul className="SPCSS_details">
                           <li><p>Modular Design</p></li>
                           <li><p>Scalable with Growth</p></li>
                           <li><p>Easy to use and Maintain</p></li>
                           <li><p>made with your needs in mind</p></li>
                        </ul>
                        <button className="SPCSS_button" onClick={(e) => {navigate("/services")}}>get more</button>
                     </div>
                     {/*-----------------------------------------------------*/}
                     <div className="SPCS_Service">
                        <h2 className="SPCSS_icon"><i className="fa-solid fa-gears"></i></h2>
                        <h3 className="SPCSS_Title">Web Optimisation</h3>
                        <p className="SPCSS_Text">
                           We will upgrade and optimize your current systems to meet modern standards and expectations.
                        </p>
                        <ul className="SPCSS_details">
                           <li><p>Modern style</p></li>
                           <li><p>Secure and Scale functions</p></li>
                           <li><p>Cut out dead code</p></li>
                           <li><p>improve user experience</p></li>
                        </ul>
                        <button className="SPCSS_button" onClick={(e) => {navigate("/services")}}>get more</button>
                     </div>
                     {/*-----------------------------------------------------*/}
                     <div className="SPCS_Service">
                        <h2 className="SPCSS_icon"><i className="fa-solid fa-mobile-screen-button"></i></h2>
                        <h3 className="SPCSS_Title">Mobile Development</h3>
                        <p className="SPCSS_Text">
                           We will develop for you a light weight mobile application for both IOS and Android
                        </p>
                        <ul className="SPCSS_details">
                           <li><p>Modular Design</p></li>
                           <li><p>Lightweight Application</p></li>
                           <li><p>Optimized for Mobile Consumption</p></li>
                           <li><p>Cheap and Effective concept</p></li>
                        </ul>
                        <button className="SPCSS_button" onClick={(e) => {navigate("/services")}}>get more</button>
                     </div>
                     {/*-----------------------------------------------------*/}
                     <div className="SPCS_Service">
                        <h2 className="SPCSS_icon"><i className="fa-solid fa-comments"></i></h2>
                        <h3 className="SPCSS_Title">Tech Support & Consulting</h3>
                        <p className="SPCSS_Text">
                           Our team will provide you tech support, consulting, IT services, debugging, testing and Training services as needed.
                        </p>
                        <ul className="SPCSS_details">
                           <li><p>Expert Oversight and Review</p></li>
                           <li><p>Full service for affordable price</p></li>
                           <li><p>Training of In-House developers</p></li>
                           <li><p>Outsourcing capabilites for all IT services</p></li>
                        </ul>
                        <button className="SPCSS_button" onClick={(e) => {navigate("/services")}}>get more</button>
                     </div>
                     {/*-----------------------------------------------------*/}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}